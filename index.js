const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

// Controllers
const { generateBingo } = require('./src/controllers/bingo');
app.use(express.json());

app.get('/', generateBingo);

app.listen(3000, () => {
  console.log('App corriendo...');
});
