var beginQuizButton = document.querySelector("#begin-quiz-btn");
var questionDocEl = document.querySelector("#question");
var possibleAnswersEl = document.querySelector("#possible-answers");

var beginQuiz = function (){
    var splashScreenEl = document.getElementById("splash-screen");
    splashScreenEl.parentNode.removeChild(splashScreenEl);
    var instructions = document.getElementById("instructions");
    instructions.parentNode.removeChild(instructions);
    var beginQuizButton = document.getElementById("begin-quiz-btn");
    beginQuizButton.parentNode.removeChild(beginQuizButton);
    firstQuestion();
}
var firstQuestion = function(){
    console.log("hello?")
    var questionBlockEl = document.createElement("div");
    questionBlockEl.className = "question-block";
        questionDocEl.appendChild(questionBlockEl);
  
    questionBlockEl.innerHTML = "<p class = 'question'>How many eggs in a dozen?</p>";
    var questionEl = document.createElement("li");
    //questionEl.innerHTML = "<a href='#'>12</a>";
    possibleAnswersEl.appendChild(questionEl);
    questionBlockEl.innerHTML = "<p class = 'question'>How many eggs in a dozen?</p>";
    var questionEl = document.createElement("li");
    //questionEl.innerHTML = "<a href='#'>5</a>";
    possibleAnswersEl.appendChild(questionEl);
    questionBlockEl.innerHTML = "<p class = 'question'>How many eggs in a dozen?</p>";
    var questionEl = document.createElement("li");
    //questionEl.innerHTML = "<a href='#'>7</a>";
    possibleAnswersEl.appendChild(questionEl);
    questionBlockEl.innerHTML = "<p class = 'question'>How many eggs in a dozen?</p>";
    var questionEl = document.createElement("li");
    //questionEl.innerHTML = "<a href='#'>18</a>";
    possibleAnswersEl.appendChild(questionEl);


    

}

beginQuizButton.addEventListener("click", beginQuiz);