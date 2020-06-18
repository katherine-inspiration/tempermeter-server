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
    sendCurrentSessionId(userId, response){
        client.query("SELECT session_id FROM started_sessions WHERE user_id = '" + userId + "' ORDER BY session_id DESC;",
            (err, res) => {
                if (err){
                    throw err;
                }
                if (res.rows){
                    res.json(res.rows);
                }
                else{
                    res.json({empty:true});
                }
            });
    },

    sendAnswers(questionId, response){
        client.query('SELECT * FROM answers WHERE question_id = ' + questionId + ";", (err, res) => {
            if (err){
                throw err;
            }
            response.json(res.rows);
        });
    },

    sendResultInfo(resultId, response){
        client.query('SELECT * FROM test_results WHERE result_id = ' + resultId + ';', (err, res) => {
            if (err){
                throw err;
            }
            response.json(res.rows);
        });
    },

    sendQuestions(response){
        client.query('SELECT * FROM questions;', (err, res) => {
            if (err){
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
                if (res.rows.length > 0){
                    response.json(res.rows);
                }
                else{
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