const fs = require('fs');

const INDICES = [0, 1, 2, 3, 4, 5];

let data = {};
let easyArray = [];
let mediumArray = [];
let hardArray = [];

// answer contains 4 possible colors, without duplicates
function easyAnswer() {
  let answer = [0, 2, 3, 4];
  for (let i = answer.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answer[i], answer[j]] = [answer[j], answer[i]];
  }

  return answer;
}
// answer contains 6 possible colors, without duplicates
function mediumAnswer() {
  let answer = [];

  while (answer.length < 4) {
    const randomColor = INDICES[
      Math.floor(Math.random() * INDICES.length)
    ];

    if (!answer.includes(randomColor)) {
      answer.push(randomColor);
    }
  }

  return answer;
}
// answer contains 6 possible colors, and may include duplicates
function hardAnswer() {
  let answer = [];

  for (let i = 0; i < 4; i++) {
      answer.push(
      INDICES[
          Math.floor(Math.random() * INDICES.length)
      ]
      );
  }

  return answer;
}
// load array with 256 unique easy answers
function loadEasyArray() {
  for (let i = 0; i < 256; i++) {
    let answer = easyAnswer();
    while (easyArray.includes(answer)) {
      answer = easyAnswer();
    }
    easyArray.push(easyAnswer());
  }
}
// load array with 360 unique medium answers
function loadMediumArray() {
  for (let i = 0; i < 360; i++) {
    let answer = mediumAnswer();
    while (mediumArray.includes(answer)) {
      answer = mediumAnswer();
    }
    mediumArray.push(mediumAnswer());
  }
}
// load array with 366 unique hard answers
function loadHardArray() {
  for (let i = 0; i < 366; i++) {
    let answer = hardAnswer();
    while (hardArray.includes(answer)) {
      answer = hardAnswer();
    }
    hardArray.push(hardAnswer());
  }
}

function loadDailyGames() {
  // load arrays with unique answers
  loadEasyArray();
  loadMediumArray();
  loadHardArray();

  for (let month = 1; month <= 12; month++) {
    for (let day = 1; day <= 31; day++) {
      if (month === 2 && day > 29) {
        break;
      } else if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
        break;
      } else {
        const key = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        data[key] = {
          Easy: easyArray.pop(),
          Medium: mediumArray.pop(),
          Hard: hardArray.pop()
        };
        // reload arrays if they are empty
        if (easyArray.length === 0) {
          loadEasyArray();
        }
        if (mediumArray.length === 0) {
          loadMediumArray();
        }
      }
    }
  }

  fs.writeFile('src/dailyGames.json', JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });
}

loadDailyGames();
