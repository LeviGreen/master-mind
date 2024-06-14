import { BLACK, GRAY, KEY_COLORS, NULL } from "./constants";

export function generateAnswer() {
  let answer = [];

  for (let i = 0; i < 4; i++) {
      answer.push(
      KEY_COLORS[
          Math.floor(Math.random() * KEY_COLORS.length)
      ]
      );
  }

  return answer;
}

export function resetBoard() {
  return [
    generateAnswer(),
    // [KEY_COLORS[2], KEY_COLORS[2], KEY_COLORS[3], KEY_COLORS[0]], // for testing
    [NULL, NULL, NULL, NULL],
    [NULL, NULL, NULL, NULL],
    [NULL, NULL, NULL, NULL],
    [NULL, NULL, NULL, NULL],
    [NULL, NULL, NULL, NULL],
    [NULL, NULL, NULL, NULL],
    [NULL, NULL, NULL, NULL],
    [NULL, NULL, NULL, NULL],
    [NULL, NULL, NULL, NULL],
    [NULL, NULL, NULL, NULL],
  ]
}

export function resetClues() {
  return [
    [GRAY, GRAY, GRAY, GRAY],
    [GRAY, GRAY, GRAY, GRAY],
    [GRAY, GRAY, GRAY, GRAY],
    [GRAY, GRAY, GRAY, GRAY],
    [GRAY, GRAY, GRAY, GRAY],
    [GRAY, GRAY, GRAY, GRAY],
    [GRAY, GRAY, GRAY, GRAY],
    [GRAY, GRAY, GRAY, GRAY],
    [GRAY, GRAY, GRAY, GRAY],
    [GRAY, GRAY, GRAY, GRAY],
    [GRAY, GRAY, GRAY, GRAY],
  ]
}

export function getClue(guess, answer) {
  let clue = [];
  let whiteArr = [];
  // find where color and position are correct
  for (let index = 0; index < 4; index++) {
    if (guess[index] === answer[index]) {
      clue.unshift(NULL);
      whiteArr.unshift(index);
    }
  };
  // remove correct guesses from arrays
  whiteArr.forEach((index) => {
    guess.splice(index, 1);
    answer.splice(index, 1);
  })
  // find where color is correct but position is wrong
  guess.forEach((color) => {
    if (answer.includes(color)) {
      clue.push(BLACK);
      answer[answer.indexOf(color)] = NULL;
    }
  });

  return clue;
}
