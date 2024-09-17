let score = 0;
let currentQuestionIndex = 0;

let questions = [
  {
    question: "Was ist die größte Stadt Europas?(Einwohnerzahl)",
    answers: ["London", "Paris", "Moskau", "Rom", "Madrid"],
    correctAnswer: 2,
  },
  {
    question: "Was ist das größte Säugetier?",
    answers: ["Giraffe", "Nashorn", "Blauwal", "Elefant", "Gelb-Haarqualle"],
    correctAnswer: 2,
  },
  {
    question: "Wie viele Kontinente gibt es auf der Erde?",
    answers: ["4", "6", "5", "7"],
    correctAnswer: 3,
  },
  {
    question: "Welches ist das kleinste Land der Welt",
    answers: ["Der Vatikan", "Monaco", "Die Fiji Inseln", "Angola"],
    correctAnswer: 0,
  },
  {
    question: "Wie heißt der längste Fluss der Welt",
    answers: ["Amazonas", "Nil", "Wolga", "Po"],
    correctAnswer: 1,
  },
  {
    question: "Wer schrieb Romeo und Julia?",
    answers: ["Göhte", "Luther", "Shakespeare", "Picasso"],
    correctAnswer: 2,
  },
  {
    question: "Welche ist Australiens Hauptstadt?",
    answers: ["Sydney", "Melbourne", "Canberra", "Perth", "Brisbane"],
    correctAnswer: 2,
  },
  {
    question: "Wie viele Knochen hat der menschliche Körper?",
    answers: ["206", "151", "278", "247", "364"],
    correctAnswer: 0,
  },
  {
    question: "Wie viele Planeten hat unser Sonnensystem?",
    answers: ["6", "8", "10", "7"],
    correctAnswer: 1,
  },
  {
    question: "In welchem Jahr viel die Berliner Mauer?",
    answers: ["1990", "1988", "1992", "1989"],
    correctAnswer: 3,
  },
];

function displayQuestion() {

if(currentQuestionIndex >= questions.length){
    
    document.getElementById("quiz-container").hidden = true;
    document.getElementById("result").hidden = false;
    document.getElementById("score").textContent = score;

    return;
}

  let question = questions[currentQuestionIndex];

  document.getElementById("question").textContent = question.question;

  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  question.answers.forEach((answer, i) => {
    let answerButton = document.createElement("button");
    answerButton.classList.add("btn", "btn-success", "me-2");
    answerButton.textContent = answer;
    answerButton.onclick = () => checkAnswer(i);
    answersDiv.appendChild(answerButton);
  });
}

displayQuestion();

function checkAnswer(userAnswer) {
  let correctAnswer = questions[currentQuestionIndex].correctAnswer;

  if (userAnswer === correctAnswer) {
    score++;
  }

  nextQuestion();
}

function nextQuestion() {
  currentQuestionIndex++;
  displayQuestion();
}
