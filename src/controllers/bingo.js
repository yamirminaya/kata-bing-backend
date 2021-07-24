const { response } = require('express');

let arrB = [];
let arrI = [];
let arrN = [];
let arrG = [];
let arrO = [];

const recurse = async (arr, cnt, min, max) => {
  let numberRand = Math.floor(Math.random() * (max - min)) + min;

  if (arr.length < cnt) {
    if (!arr.includes(numberRand)) {
      arr.push(numberRand);
    }
    await recurse(arr, cnt, min, max);
  } else return arr;
};

const generateBingo = async (req, res) => {
  //   let { event, tickets } = req.body;
  //   const user = req.user;
  try {
    let numbers = {};

    //B
    numbers.B = await recurse(arrB, 5, 1, 15);

    //I
    numbers.I = await recurse(arrI, 5, 16, 30);

    //N
    numbers.N = await recurse(arrN, 4, 31, 45);

    //G
    numbers.G = await recurse(arrG, 5, 46, 60);

    //O
    numbers.O = await recurse(arrO, 5, 61, 75);

    res.json({
      ok: true,
      numbers,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error inesperado... revisar logs',
    });
  }
};

module.exports = { generateBingo };
