const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
highScores.sort((a,b) => (a.score < b.score) ? 1 : -1);

for (let i = 0; i < highScores.length; i++){
    var firstScore = document.createElement("li");
    firstScore.textContent = "Player:" + highScores[i].name + " Score " + highScores[i].score;
    highScoresList.appendChild(firstScore);
}