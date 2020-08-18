import { data } from './data.js';
import { displayCounter } from './displayCounter.js';
import { shuffle } from "./shuffle.js";
import { displayQuestion } from './displayQuestion.js';
import { checkAnswer } from './checkAnswer.js';
import { displayScore } from './displayScore.js';

let questions = shuffle(data);

let currentQuestion = 0;
let correct = 0;

let totalQuestions = questions.length;
let currentAnswer = questions[currentQuestion].answer;
const options = document.querySelectorAll('.option');

window.addEventListener('DOMContentLoaded', function() {
  displayCounter(currentQuestion + 1, totalQuestions);
  displayQuestion(questions[currentQuestion]);
});

const handleOptionClick = (e) => {
  let value = e.target.innerHTML;
  if (currentQuestion == 19) {
    if (checkAnswer(currentAnswer, value)) {
      correct++;
    };
    displayScore(correct, totalQuestions);
    currentQuestion++;
    counter.innerHTML = '';
  } else {
    if (checkAnswer(currentAnswer, value)) {
      correct++;
    };
    currentQuestion++;
    currentAnswer = displayQuestion(questions[currentQuestion]);
    displayCounter(currentQuestion + 1, totalQuestions);
  } 
}

options.forEach(option => option.addEventListener('click', handleOptionClick));
