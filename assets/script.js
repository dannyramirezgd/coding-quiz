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
    questionTitleEl.textContent = "How many eggs we got?"
    questions.appendChild(questionTitleEl);

    var possibleAnswerEl = document.createElement("button");
    possibleAnswerEl.className ="begin-quiz-btn";
    possibleAnswerEl.textContent = "Bout a dozen"
    questions.appendChild(possibleAnswerEl);
    
    // var questionBlockEl = document.createElement("div");
    // questionBlockEl.className = "question-block";
    // questionDocEl.appendChild(questionBlockEl);
  
    // questionBlockEl.innerHTML = "<p class = 'question'>How many eggs in a dozen?</p>";
    // var questionEl = document.createElement("li");
    // //questionEl.innerHTML = "<a href='#'>12</a>";
    // possibleAnswersEl.appendChild(questionEl);
    // questionBlockEl.innerHTML = "<p class = 'question'>How many eggs in a dozen?</p>";
    // var questionEl = document.createElement("li");
    // //questionEl.innerHTML = "<a href='#'>5</a>";
    // possibleAnswersEl.appendChild(questionEl);
    // questionBlockEl.innerHTML = "<p class = 'question'>How many eggs in a dozen?</p>";
    // var questionEl = document.createElement("li");
    // //questionEl.innerHTML = "<a href='#'>7</a>";
    // possibleAnswersEl.appendChild(questionEl);
    // questionBlockEl.innerHTML = "<p class = 'question'>How many eggs in a dozen?</p>";
    // var questionEl = document.createElement("li");
    // //questionEl.innerHTML = "<a href='#'>18</a>";
    // possibleAnswersEl.appendChild(questionEl);


    

}

beginQuizButton.addEventListener("click", beginQuiz);