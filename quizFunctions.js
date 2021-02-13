/* Hides intro section and shows Question 1 */
function startQuiz() {
    document.getElementById("intro-area").style.display = "none";
    document.getElementById("question1").style.display = "inline-block";
}

/* Hides Question 1 and shows Question 2 */
function question2() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "inline-block";
}

/* Hides Question 2 and shows Question 3 */
function question3() {
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "inline-block";
}

/* Hides Question 3 and shows Question 4 */
function question4() {
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "inline-block";
}

/* Hides Question 4 and shows Question 5 */
function question5() {
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "inline-block";
}

/* Hides Question 5 and shows Question 6 */
function question6() {
    document.getElementById("question5").style.display = "none";
    document.getElementById("question6").style.display = "inline-block";
}

/* Hides Question 6 and shows Question 7 */
function question7() {
    document.getElementById("question6").style.display = "none";
    document.getElementById("question7").style.display = "inline-block";
}

/* Hides Question 7 and shows Question 8 */
function question8() {
    document.getElementById("question7").style.display = "none";
    document.getElementById("question8").style.display = "inline-block";
}

/* Hides Question 8 and shows Question 9 */
function question9() {
    document.getElementById("question8").style.display = "none";
    document.getElementById("question9").style.display = "inline-block";
}

/* Hides Question 9 and shows Question 10 */
function question10() {
    document.getElementById("question9").style.display = "none";
    document.getElementById("question10").style.display = "inline-block";
}

/* Hides Question 10 and shows results section */
function results() {
    document.getElementById("question10").style.display = "none";
    document.getElementById("results").style.display = "inline-block";
}