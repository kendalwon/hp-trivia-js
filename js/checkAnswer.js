let correct = 0;

export const checkAnswer = (answer, selection) => {
  let correct;
  (answer == selection) ? (correct = true) : (correct = false);
  return correct;
}