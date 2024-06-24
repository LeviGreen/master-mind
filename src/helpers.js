import { BLACK, GRAY, KEY_COLORS, WHITE } from "./constants";
import moment from 'moment';
import dailyGames from './dailyGames.json';

// answer contains 4 possible colors, without duplicates
export function easyAnswer() {
  let answer = [KEY_COLORS[0], KEY_COLORS[2], KEY_COLORS[3], KEY_COLORS[4]];
  for (let i = answer.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answer[i], answer[j]] = [answer[j], answer[i]];
  }

  return answer;
}

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

// get today's daily game based on mode
export function dailyAnswer(mode) {
  const today = todayDate();
  const indexArr = dailyGames[today][mode];

  return [
    KEY_COLORS[indexArr[0].toString()],
    KEY_COLORS[indexArr[1].toString()],
    KEY_COLORS[indexArr[2].toString()],
    KEY_COLORS[indexArr[3].toString()]
  ];
}

export function todayDate() {
  return moment().format('MM-DD-YYYY');
}

export const resetBoard = (mode) => {
  return [
    mode,
    // [KEY_COLORS[0], KEY_COLORS[0], KEY_COLORS[0], KEY_COLORS[0]], // for testing
    [WHITE, WHITE, WHITE, WHITE],
    [WHITE, WHITE, WHITE, WHITE],
    [WHITE, WHITE, WHITE, WHITE],
    [WHITE, WHITE, WHITE, WHITE],
    [WHITE, WHITE, WHITE, WHITE],
    [WHITE, WHITE, WHITE, WHITE],
    [WHITE, WHITE, WHITE, WHITE],
    [WHITE, WHITE, WHITE, WHITE],
    [WHITE, WHITE, WHITE, WHITE],
    [WHITE, WHITE, WHITE, WHITE],
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
  let blackArr = [];
  // find where color and position are correct
  for (let index = 0; index < 4; index++) {
    if (guess[index] === answer[index]) {
      clue.unshift(BLACK);
      blackArr.unshift(index);
    }
  };
  // remove correct guesses from arrays
  blackArr.forEach((index) => {
    guess.splice(index, 1);
    answer.splice(index, 1);
  })
  // find where color is correct but position is wrong
  guess.forEach((color) => {
    if (answer.includes(color)) {
      clue.push(WHITE);
      answer[answer.indexOf(color)] = BLACK;
    }
  });

  return clue;
}
