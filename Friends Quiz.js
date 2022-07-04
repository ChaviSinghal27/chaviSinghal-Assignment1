var readlineSync = require('readline-sync');
var userAnswer = readlineSync.question("what's your name? ");
console.log("welcome "+ userAnswer+ " to friends's quiz");



console.log("__________")
score = 0;
var questionOne = {
  question: "ross had a monkey what was his name?",
answer: "marcel",
}
var questionTwo = {
  question: "how many divorces did ross had? ",
  answer: "three",

}
var questionThree = {
  question: "what was the name of ross's first wife? ",
  answer: "carol",
}

var questionFour ={
  question: "what was the name of chandler,s new roommate when joey moved out? ",
  answer: "eddie",
    }
var questionFive = {
  question: "what was ross's son name? ",
  answer: "ben",
}
var questions = [questionOne, questionTwo, questionThree, questionFour,questionFive]

for(var i=0; i< questions.length; i++){
  var currentQuestion = questions[i];
  var userAnswer = readlineSync.question(currentQuestion.question)
  console.log(userAnswer)
  if (userAnswer === currentQuestion.answer){
    console.log("you are right")
    score = score + 1 ;
  }
  else {
    console.log("you are wrong")
     score = score - 1 ;
  }
  console.log("current score: "+ score)
  console.log("_______")
 }
console.log("final score "+ score)
