let option1 = document.getElementById("opt1")
let option2 = document.getElementById("opt2")
let option3 = document.getElementById("opt3")
let option4 = document.getElementById("opt4")
let questionBox = document.getElementById("question")
let nextButton = document.getElementById("nextBtn");
let result = document.getElementById("result")

let currentQuestion = 0;
let score = 0;

function loadQuestion(questionNumber) {
    let q = questions[questionNumber]
    questionBox.textContent = q.question;
    option1.textContent = q.option1
    option2.textContent = q.option2
    option3.textContent = q.option3
    option4.textContent = q.option4
}

nextButton.addEventListener("click", loadNextQuestion)

function loadNextQuestion() {
    let selectedOption = document.querySelector("input[type=radio]:checked");
    if (!selectedOption) {
        alert("You need to pick a question")
    }

}


loadQuestion(0)