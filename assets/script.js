var questionsArr = [
    {
    title: "How many eggs in a dozen?",
    choices: ["12","5","2","8"],
    answer: "12",
    },
    {
    title: "Who is the coolest",
    choices: ["me", "Lizzie", "April O'Neil", "Toothless"],
    answer: "me",
    },
    {
    title: "",
    choices: [],
    answer: "",
    },
    {
    title: "",
    choices: [],
    answer: "",
    },

];
var body = document.body;
var startScreenEl = document.querySelector("#start-screen");
var beginQuizButton = document.querySelector("#begin-quiz-btn");
var questions = document.querySelector("#questions");
var questionTitleEl = document.querySelector("#question-title");
var choicesEl = document.querySelector("#choice");
var timerEl = document.querySelector("#time");
var currentQuestionIndex = 0;


var beginQuiz = function (){
    
    //hide start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide")
    //unhide question section
    questions.setAttribute("class", "choice");
    //start timer
    var timer = 51;
    setInterval(function(){
        timer--;
        console.log(timer);
        timerEl.textContent = timer;
    }, 1000)

    
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
    console.log(event.target.textContent)
    //check if the user clicked the correct answer
    if (event.target.textContent !== questionsArr[currentQuestionIndex].answer){
        alert("WRONG!")
        console.log(event.target)
    } else {
        alert("RIGHT")
    }
    currentQuestionIndex++;
    getQuestion();
}
var endQuiz = function(){

}

beginQuizButton.addEventListener("click", beginQuiz);