/* Hides the previous question and shows the next */
function showNextQuestion(current, next) {
    document.getElementById(current).style.display = "none";
    document.getElementById(next).style.display = "inline-block";
}

/* Calculating the score out of 100 */
function revealResults() {
    showNextQuestion("question10", "results");
    
    var score = 0;
    score += parseInt(getSelectedRadioValue("q1")) || 0;
    score += parseInt(getSelectedRadioValue("q2")) || 0;
    score += parseInt(getSelectedRadioValue("q3")) || 0;
    score += parseInt(getSelectedRadioValue("q4")) || 0;
    score += parseInt(getSelectedRadioValue("q5")) || 0;
    score += parseInt(getSelectedRadioValue("q6")) || 0;
    score += parseInt(getSelectedRadioValue("q7")) || 0;
    score += parseInt(getSelectedRadioValue("q8")) || 0;
    score += parseInt(getSelectedRadioValue("q9")) || 0;
    score += parseInt(getSelectedRadioValue("q10")) || 0;

    if (score <= 20) {
        document.getElementById("result-header").innerHTML = `Better luck next time!`
        document.getElementById("result").innerHTML = `You are a ...<div class="result-name">Peon</div><img src="images/peon.jpg" title="Peon" alt="Peon" width="250px" height="auto"><div class="result-description"></br >You are lazy, cowardly and unfit for battle. Get back to the books!</br ></br >You scored  ${score}%</div><input id="replay-button" type="button" value="Try Again"class="btn mx-auto" onclick="tryAgain()"/>`;
    } else if (score <= 40 && score > 20) {
        document.getElementById("result-header").innerHTML = `Not terrible, but not great either!`
        document.getElementById("result").innerHTML = `You are a ...<div class="result-name">Murloc</div><img src="images/murloc.jpg" title="Murloc" alt="Murloc" width="160px" height="auto"><div class="result-description"></br >Your intelligence is limited, but at least you can throw a spear.</br ></br >You scored  ${score}%</div><input id="replay-button" type="button" value="Try Again"class="btn mx-auto" onclick="tryAgain()"/>`;
    } else if (score <= 60 && score > 40) {
        document.getElementById("result-header").innerHTML = `Pretty good. You're getting there!`
        document.getElementById("result").innerHTML = `You are an ...<div class="result-name">Adventurer</div><img src="images/adventurer.jpg" title="Adventurer" alt="Adventurer" width="140px" height="auto"><div class="result-description"></br >You are finding your feet, but you still have much to learn.</br ></br >You scored  ${score}%</div><input id="replay-button" type="button" value="Try Again"class="btn mx-auto" onclick="tryAgain()"/>`;
    } else if (score <= 80 && score > 60) {
        document.getElementById("result-header").innerHTML = `Awesome, you're not bad at this!`
        document.getElementById("result").innerHTML = `You are a ...<div class="result-name">Mage</div><img src="images/mage.jpg" title="Mage" alt="Mage" width="180px" height="auto"><div class="result-description"></br >You are an accomplished wizard, wielding more knowledge than most.</br ></br >You scored  ${score}%</div><input id="replay-button" type="button" value="Try Again"class="btn mx-auto" onclick="tryAgain()"/>`;
    } else {
        document.getElementById("result-header").innerHTML = `Wow, you really know your stuff!`
        document.getElementById("result").innerHTML = `You are a ...<div class="result-name">Titan</div><img src="images/titan.jpg" title="Titan" alt="Titan" width="200px" height="auto"><div class="result-description"></br >You are a godlike being with knowledge and power beyond any other.</br ></br >You scored  ${score}%</div><input id="replay-button" type="button" value="Try Again"class="btn mx-auto" onclick="tryAgain()"/>`;
    }
}

/*Returning the value of each of the checked radio boxes */
function getSelectedRadioValue(name) {
    var radios = document.getElementsByName(name);
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
}

function tryAgain() {
    location.reload();
}