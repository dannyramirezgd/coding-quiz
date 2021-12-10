var questionsArr = [
    {
    title: "Which of these is not a JS Data Type?",
    choices: ["Boolean","String","Inventory","Number"],
    answer: "Inventory",
    },
    {
    title: "What is the use of the isNaN function?",
    choices: ["returns true if argument is not a number", 
    "bakes you some Naan bread", "Finds the value of an integer in an array", "Splits up a string by its parts"],
    answer: "returns true if argument is not a number",
    },
    {
    title: "Which company developed JavaScript",
    choices: ["Amazon", "Mozilla", "Google", "Netscape"],
    answer: "Netscape",
    },
    {
    title: "Which of the following is not a looping structure",
    choices: ["For", "While", "Spin", "Do-While"],
    answer: "Spin",
    },

];

var body = document.body;
var startScreenEl = document.querySelector("#start-screen");
var beginQuizButton = document.querySelector("#begin-quiz-btn");
var questions = document.querySelector("#questions");
var questionTitleEl = document.querySelector("#question-title");
var choicesEl = document.querySelector("#choice");
var timerEl = document.querySelector("#time");
var endQuizEl = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var finalScoreSubmit = document.querySelector("#submit");
var goBackEl = document.querySelector("#go-back");
var currentQuestionIndex = 0;
var timer = 50;
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

var beginQuiz = function (){
    //hide start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide")
    //unhide question section
    questions.setAttribute("class", "choice");
    //start timer
    
    timerId = setInterval(timerCountdown, 1000);

    timerEl.textContent = timer;

    
    //start first question
    getQuestion();

}
var getQuestion = function(){
    //get current question object from array
    var currentQuestion = questionsArr[currentQuestionIndex];
    //update title with current question
    var questionTitleEl = document.getElementById("question-title");
    questionTitleEl.textContent = currentQuestion.title;
    questionTitleEl.setAttribute("class", "choice");
   //remove the previous question
    choicesEl.innerHTML = "";
   //loop through the choices
   for(i=0; i<currentQuestion.choices.length; i++){
       //create a button for each choice
        var choiceBtn = document.createElement("button");
        choiceBtn.textContent = currentQuestion.choices[i]
        choiceBtn.setAttribute("class","begin-quiz-btn");
        choiceBtn.addEventListener("click", checkCorrect);

        choicesEl.appendChild(choiceBtn);

   }
}
var checkCorrect = function(event){
    //check if the user clicked the correct answer
    if (event.target.textContent !== questionsArr[currentQuestionIndex].answer){
        alert("WRONG!")
        timer -= 15; 
        if (timer < 0){
            timer = 0;
        }
    } else {
        alert("RIGHT")
    }
    currentQuestionIndex++;
    if (currentQuestionIndex === questionsArr.length){
        endQuiz();
    }
    else{
    getQuestion();
    }
}
var endQuiz = function(){
    clearInterval(timerId);
    choicesEl.innerHTML = "";
    endQuizEl.setAttribute("class","end-screen");
    finalScore.textContent = timer;

}
var timerCountdown = function (){
    timer--;
    timerEl.textContent = timer;
}

var saveHighScore = function(){
    var initials = document.getElementById("initials");
    const score = {
        score: timer,
        name: initials.value,
    };
highScores.push(score);
localStorage.setItem("highScores", JSON.stringify(highScores));
window.location.href = "highscores.html";
}
var goBack = function (){
    console.log("trying to go back")
    window.location.href = "index.html";
}
beginQuizButton.addEventListener("click", beginQuiz);
finalScoreSubmit.addEventListener("click" , saveHighScore);
