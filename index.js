const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

// CONTROLLERS

const { generateBingo } = require('./src/controllers/bingo');

// app.use(express.static(__dirname));

app.get('/', generateBingo);

// app.get('/', async (req, res) => {
//   let array = await generateBingo(req, res);
//   res.sendFile(__dirname + '/src/views/index.html');
// });

app.listen(3000, () => {
  console.log('App corriendo...');
});
