import { NULL, KEY_COLORS } from "./constants";

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