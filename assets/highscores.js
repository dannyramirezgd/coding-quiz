const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

for (let i = 0; i < highScores.length; i++){
    console.log(highScores[i]);
    var firstScore = document.createElement("li");
    firstScore.textContent = "Player:" + highScores[i].name + " Score " + highScores[i].score;
    highScoresList.appendChild(firstScore);
}