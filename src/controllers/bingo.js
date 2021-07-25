const { response } = require('express');

const generateBingo = async (req, res) => {
  try {
    let bingo = [];
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
      let char = strGame.charAt(i); //char
      bingo[i] = {};
      bingo[i].letter = char;
      bingo[i].numbers = [];
      await recursePromise(bingo[i].numbers, 5, min, max).then((resp) => {});
    }

    res.json(bingo);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error inesperado... revisar logs',
    });
  }
};

module.exports = { generateBingo };
