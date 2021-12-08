var body = document.body;
var startScreenEl = document.querySelector("#start-screen");
var beginQuizButton = document.querySelector("#begin-quiz-btn");
var questions = document.querySelector("#questions");
var questionTitleEl = document.querySelector("#question-title");
var possibleAnswerEl = document.querySelector("#possible-answers");

var beginQuiz = function (){
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.parentNode.removeChild(startScreenEl);
    firstQuestion();
}
var firstQuestion = function(){
    var questionTitleEl = document.createElement("h2");
    questionTitleEl.className = "start";
    questionTitleEl.textContent = "Does this work?"
    questions.appendChild(questionTitleEl);

    var possibleAnswerEl = document.createElement("button");
    possibleAnswerEl.className ="begin-quiz-btn";
    possibleAnswerEl.textContent = "Looks like it does"
    questions.appendChild(possibleAnswerEl);
    

    

}

beginQuizButton.addEventListener("click", beginQuiz);