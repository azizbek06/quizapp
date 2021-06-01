//Dom elements
const orderNumber = document.querySelector(".order_number");
const timer = document.querySelector("#timer");
const numberOne = document.querySelector("#number_1");
const numberTwo = document.querySelector("#number_2");
const operationElement = document.querySelector("#operation");
const answersContent = document.querySelector(".answers_content");
const pointsPontent = document.querySelector(".points_content");
const startBtn = document.querySelector("#start_btn");
const wrapper_btn = document.querySelector(".wrapper_btn");
const wrapper_quiz = document.querySelector(".wrapper_quiz");
const wrapper_total_points = document.querySelector(".wrapper_total_points");
const result_correct = document.querySelector("#result_correct");
const result_incorrect_and_timed = document.querySelector(
  "#result_incorrect_and_timed"
);
const result_total_points = document.querySelector("#result_total_points");

//utils vars
let question = {
  number_one: null,
  number_two: null, 
  operation: null,
  correct_answer: null,
  answers: [],
  answer_status: null,
  /**
     0->xato javob
     1->togri javob */
};
let questions = [];
let time = 10;
// let timerInterval;
// let questionAmount = 15,

//utils function

function randomNumber(a = 0, point = 10) {
  let intervals = [a - point, a + point];
  if (a === 0) intervals.splice(0, 1);
  return Math.floor(
    Math.random() * intervals[Math.floor(Math.random() * intervals.length)]
  );
}

function randomOperation() {
  let operations = ["+", "-", "*"];
  return operations[Math.floor(Math.random() * operations.length)];
}

function randomAnswers(correctAnswer) {
  let answers = [correctAnswer];
  for (let i = 0; i < 3; i++) {
    answers.push(randomNumber(correctAnswer, 100));
  }
  return answers.sort(() => Math.random() - 0.5);
}
function createQuestion() {
  if (questions.length===15){
    clearInterval(interval);
    openTotalPoints();
  } 
  const number_one = randomNumber();
  const number_two = randomNumber();
  const operation = randomOperation();
  const correct_answer = eval(`${number_one} ${operation}  ${number_two}`);
  const answers = randomAnswers(correct_answer);
  question = {
    number_one,
    number_two,
    operation,
    correct_answer,
    answers,
    answer_status: 0,
  }; 
  questions.push(question);
  timerInterval = setInterval(checkAndChangeTime, 1000);
}

function checkAndChangeTime() {
  if (time === 0) {
    question.answer_status = -1;
    resetTimer();
  } else {
    time--;
  }
  timer.innerHTML = time + "s";
}
function resetTimer() {
  time = 10;
  clearInterval(timerInterval);
  renderPoints();
  nextQuestion();
  timer.innerHTML = time + "s";
}
function cheсkAnswer(selectedAnswer) {
  question.correct_answer === selectedAnswer && (question.answer_status = 1);
  if (questions.length === 15) {
    clearInterval(timerInterval);
    openTotalPoints(); 
  } else resetTimer();
}


function openTotalPoints() {
  wrapper_quiz.classList.add("d-none");
  wrapper_total_points.classList.remove("d-none"); 

  let correctAmount = questions.filter(function(question) {
   return question.answer_status===1;
  }).length;
  result_correct.innerHTML = correctAmount;
  result_incorrect_and_timed.innerHTML = 15 - correctAmount;
  result_total_points.innerHTML = correctAmount * 10;
}
function nextQuestion() {
  createQuestion();
  renderQuestion();
}

//DOM function
function startTest() {
  createQuestion();
  renderQuestion();
}

function renderQuestion() {
  const { number_one, number_two, operation, answers } = question;
  numberOne.innerHTML = number_one;
  numberTwo.innerHTML = number_two;
  operationElement.innerHTML = operation;
  orderNumber.innerHTML = questions.length;
  renderAnswers(answers);
}

function renderAnswers(answers = []) {
  const result = `<div class="row">
    <div class="answer_box" onclick ="cheсkAnswer(${answers[0]})">
    <div class="answer_btn">A</div>
    <span class="answer_text">${answers[0]}</span>
  </div>
  <div class="answer_box"onclick ="cheсkAnswer(${answers[1]})">
    <div class="answer_btn">B</div>
    <span class="answer_text">${answers[1]}</span>
  </div>
</div> 

<div class="row">
  <div class="answer_box" onclick ="cheсkAnswer(${answers[2]})">
    <div class="answer_btn">C</div>
    <span class="answer_text">${answers[2]}</span>
  </div>
  <div class="answer_box" onclick ="cheсkAnswer(${answers[3]})">
    <div class="answer_btn">D</div>
    <span class="answer_text">${answers[3]}</span>
  </div>
</div>`;
  answersContent.innerHTML = result;
}

function renderPoints() {
  let correctAnswerStatus = questions[questions.length - 1].answer_status;
  const li = document.createElement("li");
  li.classList.add(
    "pointer",
    `pointer-${
      correctAnswerStatus
        ? correctAnswerStatus === 1
          ? "success"
          : "timed"
        : "failed"
    }`
  );
  pointsPontent.appendChild(li);
}


 
  startBtn.addEventListener("click",function(){
   
    wrapper_btn.classList.add("d-none");
    wrapper_quiz.classList.remove("d-none"); 
    startTest();
  });

