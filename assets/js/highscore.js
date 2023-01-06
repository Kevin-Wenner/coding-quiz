// pull local storage to get scores
var scoreString = localStorage.getItem("score")
var score = JSON.parse(scoreString);

// unobject score

console.log(score);

var scoreBoardEl = document.getElementById("scoreBoard");

makeScoreListing();
//  div with 4 fields intials, right, wrong, time left
function makeScoreListing(){
    var newScore = document.createElement("div");
    newScore.setAttribute("class", "scorePost");
    scoreBoardEl.appendChild(newScore);
    newScore.innerHTML += "<div>" + score.player + "</div>";
    newScore.innerHTML +="<div>" + score.scoreRight + "</div>";
    newScore.innerHTML +="<div>" + score.scoreWrong + "</div>";
    newScore.innerHTML += "<div>" +score.time + "</div>"; 

}





