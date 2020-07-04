var credenrials = require('./credentials');

const {Client} = require('pg');
const client = new Client({
    connectionString: process.env.DATABASE_URL || credenrials.DATABASE_URI,
    ssl: {
        rejectUnauthorized: false
    }
})


client.connect();

module.exports = {

    sendResultData(sessionId, response) {
        client.query("SELECT results.result_name as name, results.result_id as id, " +
            "results.result_text as text, results.result_picture as picture " +
            "FROM test_results as results, results_history as history " +
            "WHERE history.session_id = " + sessionId + " AND history.result_id = results.result_id;",
            (err, resultData) => {
                if (err) {
                    response.json("Couldn't get result data from database");
                    throw err;
                }
                console.log("Sending data");
                console.log(resultData.rows);
                response.json(resultData.rows);
            });
    },

    sendFinishedSessions(userId, response) {
        client.query("SELECT results_history.session_id, results_history.date, test_results.result_name " +
            "FROM results_history, test_results" +
            " WHERE results_history.user_id = '" + userId + "' AND results_history.result_id = test_results.result_id" +
            " ORDER BY results_history.date DESC;",
            (err, sessions) => {
                if (err) {
                    response.json("Couldn't get sessions history for current user");
                    throw err;
                }
                console.log(sessions.rows);
                let responseArray = [];
                for (let session of sessions.rows) {
                    if (responseArray.find(s => s.session_id === session.session_id)) {
                        console.log(responseArray.find(s => s.session_id === session.session_id));
                        responseArray.find(s => s.session_id === session.session_id).result.push(session.result_name);
                    } else {
                        responseArray.push({
                            session_id: session.session_id,
                            result: [session.result_name],
                            date: session.date
                        });
                    }
                    console.log(responseArray);
                }
                response.json(responseArray);

            });
    },

    calculateResult(userId, sessionId, response) {
        client.query("SELECT answer_id FROM answers_history WHERE session_id = " + sessionId,
            (err, res) => {
                if (err) {
                    response.json("Couldn't get the answers history");
                    throw err;
                }
                let inRow = '(';
                if (res.rows) {
                    inRow += res.rows[0].answer_id;
                    for (let i = 1; i < res.rows.length; i++) {
                        inRow += ', \'' + res.rows[i].answer_id + '\'';
                    }
                }
                inRow += ' )';
                client.query("SELECT answer_id, ball FROM answers WHERE answer_id IN " + inRow,
                    (err, res) => {
                        if (err) {
                            response.json('Couldn\'t get the answers balls');
                            throw err;
                        }
                        console.log("selected answers with balls");
                        console.log(res.rows);
                        let balls = [
                            {ball: 1, count: 0},
                            {ball: 2, count: 0},
                            {ball: 3, count: 0},
                            {ball: 4, count: 0}
                        ];
                        for (let answer of res.rows) {
                            balls[answer.ball - 1].count += 1;
                        }
                        balls.sort((a, b) => {
                            return b.count - a.count
                        });
                        console.log("Answers and balls after sorting");
                        console.log(balls);
                        let topResults = [balls[0]];
                        for (let i = 1; i < balls.length; i++) {
                            if (balls[i].count === topResults[0].count) {
                                topResults.push(balls[i]);
                            } else {
                                break;
                            }
                        }
                        console.log("Top results");
                        console.log(topResults);
                        let topResultBalls = [];
                        for (let result of topResults) {
                            topResultBalls.push(result.ball);
                        }
                        let topResultBallsRow = "( " + topResultBalls[0];
                        for (let i = 1; i < topResultBalls.length; i++) {
                            topResultBallsRow += ", " + topResultBalls[i];
                        }
                        topResultBallsRow += " );";
                        console.log("Top Results Balls Filter Row");
                        console.log(topResultBallsRow);
                        client.query("SELECT result_id FROM test_results WHERE result_ball  IN " + topResultBallsRow,
                            (err, res) => {
                                if (err) {
                                    response.json("Couldn't get top results ids");
                                    throw err;
                                }

                                let resultsHistoryRow = " (" + res.rows[0].result_id + ", CURRENT_TIMESTAMP, " + sessionId +
                                    ", " + userId + " )";
                                for (let i = 1; i < res.rows.length; i++) {
                                    resultsHistoryRow += ", (" + res.rows[i].result_id + ", CURRENT_TIMESTAMP, " + sessionId +
                                        ", " + userId + " )";
                                }
                                client.query("INSERT INTO results_history (result_id, date, session_id, user_id) VALUES " + resultsHistoryRow +
                                    "; DELETE FROM started_sessions WHERE session_id = " + sessionId + ";",
                                    (err, res) => {
                                        if (err) {
                                            response.json("Couldn't write the results to the history or couldn't finish the session");
                                            throw err;
                                        }
                                        response.json("The result is calculated and is written to the database. The session is finished.");

                                    }
                                );
                            }
                        )

                    }
                );
            }
        )
    },

    startSession(userId, response) {
        client.query("INSERT INTO started_sessions (user_id) VALUES ( '" + userId + "' );",
            (err, res) => {
                if (err) {
                    response.json({status: "Couldn\'t start session"});
                    throw err;
                }
                response.json({status: "Session is started"});
            }
        )
    },

    finishSession(sessionId, response) {
        client.query("DELETE FROM started_sessions WHERE session_id = " + sessionId + ";",
            (err, res) => {
                if (err) {
                    response.json("Couldn\'t finish session");
                    throw err;
                }
                response.json("The session is finished");
            }
        )
    },

    sendAnswerBall(answerId, response) {
        client.query("SELECT answer_id, ball FROM answers WHERE answer_id = " + answerId + " ;",
            (err, res) => {
                if (err) {
                    throw err;
                }
                if (res.rows) {
                    response.json(res.rows[0]);
                } else {
                    response.json({empty: true});
                }
            }
        );
    },

    putResult(result, response) {
        console.log(result);
        client.query("INSERT INTO results_history (session_id, user_id, result_id, date) VALUES (" +
            result.sessionId + ", " +
            result.userId + ", " +
            result.resultId + ", " +
            result.date + " );",
            (err, res) => {
                if (err) {
                    response.json('Couldn\'t add result to database');
                    throw err;
                }
                response.json('The result is added');
            }
        );
    },

    putAnswer(answer, response) {
        console.log('server got the answer');
        console.log(answer);

        client.query("SELECT * FROM answers_history WHERE session_id = " + answer.session_id +
            " AND question_id = " + answer.question_id, (err, res) => {
            if (err) {
                response.json('Couldn\'t add the answer');
                throw err;
            }
            if (res.rows.length === 0) {
                client.query("INSERT INTO answers_history (session_id, answer_id, question_id) VALUES ( " +
                    answer.session_id + ", " +
                    answer.answer_id + ", " +
                    answer.question_id + " );",
                    (err) => {
                        if (err) {
                            response.json('Couldn\'t add the answer');
                            throw err;
                        }
                        response.json('The answer is successfully added');
                    }
                );
            } else {
                client.query('UPDATE answers_history SET answer_id = ' + answer.answer_id +
                    'WHERE session_id = ' + answer.session_id + ' AND question_id = ' + answer.question_id,
                    (err) => {
                        if (err) {
                            response.json("Couldn't add the answer");
                            throw err;
                        }
                        response.json("The answer is suscessfully set");
                    });
            }
        });


    },

    sendCurrentSessionId(userId, response) {
        client.query("SELECT session_id FROM started_sessions WHERE user_id = '" + userId + "' ORDER BY session_id DESC;",
            (err, res) => {
                if (err) {
                    throw err;
                }
                if (res.rows) {
                    response.json(res.rows[0]);
                } else {
                    response.json({empty: true});
                }
            });
    },

    sendAnswers(questionId, response) {
        client.query('SELECT * FROM answers WHERE question_id = ' + questionId + ";", (err, res) => {
            if (err) {
                throw err;
            }
            response.json(res.rows);
        });
    },

    sendAnswer(session_id, question_id, response) {
        client.query('SELECT * FROM answers_history WHERE session_id = ' + session_id +
            ' AND question_id = ' + question_id, (err, res) => {
                if (err) {
                    response.json('Couldn\'t get the answer_id from the history');
                    throw err;
                }
                response.json(res.rows);
            }
        );
    },

    sendQuestions(response) {
        client.query('SELECT * FROM questions;', (err, res) => {
            if (err) {
                throw err;
            }
            response.json(res.rows);
        });

    },

    sendAnswersHistory(sessionId, response) {
        client.query('SELECT * FROM answers_history WHERE session_id =' + sessionId + ";",
            (err, res) => {
                if (err) {
                    throw err;
                }
                if (res.rows.length > 0) {
                    response.json(res.rows);
                } else {
                    response.json({
                        empty: true
                    })
                }
            });
    },
    sendResultsHistory(userId, response) {
        client.query("SELECT session_id, date, result_id FROM Results_History WHERE user_id = '" + userId + "' ORDER BY date DESC;",
            (err, res) => {
                if (err) {
                    console.log(err.message);
                    throw err;
                }
                if (res.rows.length > 0) {
                    response.json(res.rows);
                } else {
                    response.json({
                        epmty: true
                    });
                }
            });
    }
};