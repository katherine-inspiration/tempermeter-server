var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var pgClient = require('./postgreClient');

var app = express();
const router = express.Router();

const port = process.env.PORT || 3000;


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));



app.get('/api/answer_ball/:answer_id', (req, res) => {
  pgClient.sendAnswerBall(req.params.answer_id, res);
});

app.get('/api/answers/:question_id', (req, res) => {
  pgClient.sendAnswers(req.params.question_id, res);
});

app.get('/api/history/results/:user_id', (req, res) => {
  pgClient.sendResultsHistory(req.params.user_id, res);
});

app.get('/api/history/answers/:session_id', (req, res) => {
  pgClient.sendAnswersHistory(req.params.session_id, res);
});

app.get('/api/history/answers/:session_id/:question_id', (req, res) => {
  pgClient.sendAnswer(req.params.session_id, req.params.question_id, res);
});

app.get('/api/images/holeric', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'holeric.PNG'));
});

app.get('/api/images/flegmatic', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'flegmatic.png'));
});

app.get('/api/images/sangvinic', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'sangvinic.PNG'));
});

app.get('/api/images/melanholic', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'melanholic.PNG'));
});

app.get('/api/questions', (req, res) => {
  pgClient.sendQuestions(res);
});

app.get('/api/result/calculate/:session_id', (req, res) => {
  pgClient.calculateResult(req.params.session_id, res);
});

app.get('/api/result_info/:result_id', (req, res) => {
  pgClient.sendResultInfo(req.params.result_id, res);
});

app.get('/api/session/:user_id', (req, res) => {
  pgClient.sendCurrentSessionId(req.params.user_id, res);
});

app.get('/api/session/:session_id/finish', (req, res) => {
  pgClient.finishSession(req.params.session_id, res);
});

app.get('/api/session/start/:user_id', (req, res) => {
  pgClient.startSession(req.params.user_id, res);
});


app.put('/api/answer', (req, res) => {
  console.log(req);
  pgClient.putAnswer(req.body, res);
});

app.put('/api/result', (req, res) => {
  pgClient.putResult(req.body, res);
});



app.get('/api', (req, res) => {
  res.json({text: "Hello, api!"})
});


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => console.log(`url-shortener listening on port ${port}!`));

module.exports = app;
