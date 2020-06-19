var credenrials = require('./credentials');

const {Client} = require('pg');
const client = new Client({
    connectionString: process.env.DATABASE_URL || credenrials.DATABASE_URI,
    ssl: {
        rejectUnauthorized: false
    }
});


client.connect();

module.exports = {
    startSession(userId, response) {
        client.query("INSERT INTO started_sessions (user_id) VALUES ( '" + userId + "' );",
            (err, res) => {
                if (err) {
                    response.send("Couldn\'t start session");
                    throw err;
                }
                response.send("Session is started");
            }
        )
    },

    finishSession(sessionId, response) {
        client.query("DELETE FROM started_sessions WHERE session_id = " + sessionId + ";",
            (err, res) => {
                if (err) {
                    response.send("Couldn\'t finish session");
                    throw err;
                }
                response.send("The session is finished");
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
        console.log(answer);
        client.query("INSERT INTO answers_history (session_id, answer_id, question_id) VALUES " +
            answer.sessionId + ", " +
            answer.answerId + ", " +
            answer.questionId + " );",
            (err, res) => {
                if (err) {
                    response.json('Couldn\'t add the answer');
                    throw err;
                }
                response.json('The answer is successfully added');
            }
        );
    },

    sendCurrentSessionId(userId, response) {
        client.query("SELECT session_id FROM started_sessions WHERE user_id = '" + userId + "' ORDER BY session_id DESC;",
            (err, res) => {
                if (err) {
                    throw err;
                }
                if (res.rows) {
                    res.json(res.rows);
                } else {
                    res.json({empty: true});
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

    sendResultInfo(resultId, response) {
        client.query('SELECT * FROM test_results WHERE result_id = ' + resultId + ';', (err, res) => {
            if (err) {
                throw err;
            }
            response.json(res.rows);
        });
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
}