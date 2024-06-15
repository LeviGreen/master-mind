import { BLACK, GRAY, KEY_COLORS, NULL } from "./constants";

// answer contains 6 possible colors, without duplicates
export function mediumAnswer() {
  let answer = [];

  while (answer.length < 4) {
    const randomColor = KEY_COLORS[
      Math.floor(Math.random() * KEY_COLORS.length)
    ];

    if (!answer.includes(randomColor)) {
      answer.push(randomColor);
    }
  }

  return answer;
}

// answer contains 6 possible colors, and may include duplicates
export function hardAnswer() {
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

export const resetBoard = (mode) => {
  return [
    mode,
    // [KEY_COLORS[0], KEY_COLORS[0], KEY_COLORS[0], KEY_COLORS[0]], // for testing
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
