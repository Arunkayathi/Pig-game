var scores, playerActive, roundScore, winningScore;
playerActive = 0;
scores = [0, 0];
roundScore = 0;
winningScore = 100;
var current = 0;
document.querySelector("input").value = 100;
document.querySelector(".dice").style.display = "none";
document.querySelector('.btn-hold').disabled = false;
document.querySelector('.btn-roll').disabled = false;


document.querySelector(".btn-roll").addEventListener('click', function () {
    winningScore = document.querySelector("input").value;


    if (winningScore < 0) {
        document.querySelector("input").value = 100;
    } else {
        document.querySelector('.wins').style.display = "none";
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDom = document.querySelector(".dice");
        diceDom.style.display = "block";
        diceDom.src = "dice-" + dice + ".png";
        if (dice !== 1) {
            current = current + dice;
            document.querySelector("#current-" + playerActive).textContent = current;
        } else {

            nextPlayer();

        }
    }



});

function nextPlayer() {
    current = 0;
    document.querySelector("#current-" + playerActive).textContent = current;
    playerActive === 0 ? playerActive = 1 : playerActive = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

}
document.querySelector(".btn-new").addEventListener('click', function () {
    scores = [0, 0]
    current = 0;
    for (var i = 0; i <= 1; i++) {
        document.querySelector("#score-" + i).textContent = 0;
        document.querySelector("#current-" + i).textContent = 0;
    }
    document.querySelector('.btn-new span').innerHTML = "New Game"
    document.querySelector('.btn-new').classList.toggle('winner');
    document.querySelector(".wins").style.display = "none";
    document.querySelector('.dice').style.display = "none"
    document.querySelector('.btn-hold').disabled = false;
    document.querySelector('.btn-roll').disabled = false;

});


document.querySelector(".btn-hold").addEventListener('click', function () {
    scores[playerActive] += current;
    document.querySelector("#score-" + playerActive).textContent = scores[playerActive];
    if (scores[playerActive] >= winningScore) {
        document.querySelector('.btn-new span').innerHTML = "Start Again ?"
        document.querySelector('.btn-new').classList.toggle('winner');
        document.querySelector(".dice").style.display = "none";
        document.querySelector('.wins').textContent = "Player " + (playerActive + 1) + " wins";
        document.querySelector('.wins').style.display = "block"
        document.querySelector('.btn-hold').disabled = true;
        document.querySelector('.btn-roll').disabled = true;

    } else {
        nextPlayer();
    }


});
