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
        document.getElementById("result").innerHTML = "You are a peon.";
    } else if (score <= 40 && score > 20) {
        document.getElementById("result").innerHTML = "You are a murloc.";
    } else if (score <= 60 && score > 40) {
        document.getElementById("result").innerHTML = "You are a knight.";
    } else if (score <= 80 && score > 60) {
        document.getElementById("result").innerHTML = "You are a wizard.";
    } else {
        document.getElementById("result").innerHTML = "You are a god.";
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