const questions = [
  {
    question: "Which is larget animal in the world?",
    answers: [
      {text: "Shark", correct: false},
      {text: "Whale", correct: true},
      {text: "Elephant", correct: false},
      {text: "Giraffe", correct: false}
    ]
  },
  {
    question: "Which is smoller animal in theworld?",
    answers: [
      {text: "Shark", correct: false},
      {text: "Whale", correct: false},
      {text: "Elephant", correct: false},
      {text: "Mause", correct: true}
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const imageElement = document.getElementById("image");

let currentQuestionIndex = 0;
let score = 0;



function startQuiz(){
  currentQuestionIndex=0;
  score=0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

 function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question

  currentQuestion.answers.forEach(answer =>{const button = document.createElement("button");
  button.innerHTML = answer.text;
  button.classList.add("btn");
  answerButtons.appendChild(button);
  if(answer.correct){
    button.dataset.correct =answer.correct;
  }
  button.addEventListener("click", selsctAnswer);
  });

  if (currentQuestionIndex ==0){
    document.getElementById("img-whale").style.display = "block"
  } if (currentQuestionIndex ==1){
    document.getElementById("img-whale").style.display = "none";
    document.getElementById("img-mause").style.display = "block"
  } 





 }

 function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  };
 }

function selsctAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button=> {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled =true;
  })
  nextButton.style.display = "block"
}

function showScore(){
  resetState();
  questionElement.innerHTML =`You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  imageElement.style.background = "tranparent";
  document.getElementById("img-whale").style.display = "none";
  document.getElementById("img-mause").style.display = "none"
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else {
    showScore();
  }
  
}


nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
});


startQuiz(); 