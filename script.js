let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Was bedeutet CSS?",
    answer_1: "Computer Style Sheets",
    answer_2: "Cascading Style Sheets",
    answer_3: "Creative Style System",
    answer_4: "Colorful Style Sheets",
    right_answer: 2,
  },
  {
    question: "Welche Programmiersprache läuft im Browser?",
    answer_1: "Java",
    answer_2: "C++",
    answer_3: "Python",
    answer_4: "JavaScript",
    right_answer: 4,
  },
  {
    question: "Wofür wird JavaScript hauptsächlich verwendet?",
    answer_1: "Zum Styling von Webseiten",
    answer_2: "Zum Strukturieren von Inhalten",
    answer_3: "Zur Programmierung von interaktiven Webseiten",
    answer_4: "Zum Erstellen von Datenbanken",
    right_answer: 3,
  },
  {
    question: "Was ist eine Variable in JavaScript?",
    answer_1: "Ein Speicherort für Daten",
    answer_2: "Ein HTML-Element",
    answer_3: "Ein CSS-Stil",
    answer_4: "Ein Browser",
    right_answer: 1,
  },
];

let currentQuestion = 0;

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
  } else {
    let question = questions[currentQuestion];

    document.getElementById("question-number").innerHTML = currentQuestion + 1;
    document.getElementById("questiontext").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  console.log("Selected answer is ", selection);
  let selectedQuestionNumber = selection.slice(-1);
  console.log("selectedQuestionNumber is ", selectedQuestionNumber);
  console.log("Current question is ", question["right_answer"]);

  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (selectedQuestionNumber == question["right_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("next-button").disabled = false;
}
function nextQuestion() {
  currentQuestion++;
  document.getElementById("next-button").disabled = true;
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}
