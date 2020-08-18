export const checkAnswer = (answer, selection) => {
  let correct;
  (answer == selection) ? (correct = true) : (correct = false);
  console.log(correct);
  return correct;
}