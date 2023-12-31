const questions = [
  { question: "The Sun is a star.", answer: true },
  { question: "The Earth is flat.", answer: false },
  { question: "Mars is the hottest planet in the solar system.", answer: false },
  { question: "Jupiter has more moons than any other planet.", answer: true },
  { question: "The Milky Way is the only galaxy in the universe.", answer: false }
];
let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const trueButton = document.getElementById("true-button");
const falseButton = document.getElementById("false-button");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

displayQuestion();

function displayQuestion() {
  const question = questions[currentQuestionIndex];
  questionElement.textContent = question.question;
  resultElement.textContent = ""; // Clear any previous results
}

trueButton.addEventListener("click", checkAnswer.bind(null, true));
falseButton.addEventListener("click", checkAnswer.bind(null, false));

function checkAnswer(userAnswer) {
  const correctAnswer = questions[currentQuestionIndex].answer;
  if (userAnswer === correctAnswer) {
    score++;
    scoreElement.textContent = "Score: " + score;
    resultElement.textContent = "Correct!";
  } else {
    resultElement.textContent = "Incorrect!";
  }

  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  setTimeout(displayQuestion, 1000); // Delay before next question
}
