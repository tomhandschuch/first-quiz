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
  {
    question: "Wieviele Bundesländer hat Deutschland?",
    answers: ["14", "16", "17", "15"],
    correctAnswer: 1,
  },
  {
    question: "Welches Metall ist der Hauptbestandteil von Bronze?",
    answers: ["Blech", "Lithium", "Kupfer", "Eisen"],
    correctAnswer: 2,
  },
  {
    question: "Wieviele Sekunden hat eine Stunde?",
    answers: ["3600", "2400", "4800", "3200"],
    correctAnswer: 0,
  },
  {
    question: "Wieviele Zähne hat ein ERWACHSENER Mensch NORMALERWEISE?",
    answers: ["32", "30", "28", "26", "36"],
    correctAnswer: 0,
  },
  {
    question: "In welchem jahr sank die Titanic?",
    answers: ["1895", "1912", "1940", "1890"],
    correctAnswer: 1,
  },
  {
    question: "Wie viele Schachfiguren hat ein Spieler zu Beginn einer Partie?",
    answers: ["20", "18", "14", "16", "24"],
    correctAnswer: 3,
  },
  {
    question: "Welcher ist der längste Bergkamm der Welt?",
    answers: ["Alpen", "Ural", "Anden", "Hymalaya"],
    correctAnswer: 2,
  },
  {
    question: "Wie viele Jahre dauert ein Schaltjahr?",
    answers: ["364", "367", "365", "366", "370"],
    correctAnswer: 3,
  },
  {
    question: "Wer erfand die Glühbirne?",
    answers: ["Tesla", "Edison", "Newton", "Oppenheimer"],
    correctAnswer: 1,
  },
  {
    question: "Welches ist das meistgesprochene Muttersprachler-Land der Welt?",
    answers: ["Mandarin", "Englisch", "Spanisch", "Hindi", "Französisch"],
    correctAnswer: 1,
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
    answerButton.classList.add("btn", "btn-dark", "me-2");
    answerButton.textContent = answer;
    answerButton.onclick = () => checkAnswer(i);
    answersDiv.appendChild(answerButton);
  });
}

displayQuestion();

function checkAnswer(userAnswer) {
  let correctAnswer = questions[currentQuestionIndex].correctAnswer;
  let answersDiv = document.getElementById("answers");
  let answerButtons = answersDiv.querySelectorAll("button");

  answerButtons.forEach((button, index) => {
    if (index === correctAnswer) {
      button.classList.remove("btn-dark");
      button.classList.add("btn-outline-success"); 
    }
    if (index === userAnswer && userAnswer !== correctAnswer) {
      button.classList.remove("btn-dark");
      button.classList.add("btn-outline-danger"); 
    }
    button.disabled = true; 
  });

  if (userAnswer === correctAnswer) {
    score++;
  }

  setTimeout(() => {
    nextQuestion();
  }, 1000);
}


function nextQuestion() {
  currentQuestionIndex++;
  displayQuestion();
}
