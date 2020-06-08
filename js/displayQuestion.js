import { shuffle } from "./shuffle.js";

export const displayQuestion = (data) => {
  question.innerHTML = data.question;
  let options = [];
  options.push(data.answer, data.optionA, data.optionB, data.optionC);
  shuffle(options);
  option1.innerHTML = options[0];
  option2.innerHTML = options[1];
  option3.innerHTML = options[2];
  option4.innerHTML = options[3];
}



