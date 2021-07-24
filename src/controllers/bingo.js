const { response } = require('express');

const generateBingo = async (req, res) => {
  try {
    let numbers = {};
    let strGame = 'BINGO';

    const recursePromise = (arr, cnt, min, max) => {
      return new Promise((resolve) => {
        let numberRand = Math.floor(Math.random() * (max - min)) + min;

        if (arr.length < cnt) {
          if (!arr.includes(numberRand)) {
            arr.push(numberRand);
          }
          return resolve(recursePromise(arr, cnt, min, max));
        } else return resolve(arr);
      });
    };

    for (let i = 0; i < strGame.length; i++) {
      let min = i * 15 + 1;
      let max = (i + 1) * 15;
      let char = strGame.charAt(i);
      numbers[char] = [];
      await recursePromise(numbers[char], 5, min, max).then((resp) => {});
    }

    res.json({
      ok: true,
      numbers,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error inesperado... revisar logs',
    });
  }
};

module.exports = { generateBingo };
