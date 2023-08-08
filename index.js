require('dotenv').config();

const express = require('express');

const app = express();

const router = require('./app/router');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server ready: http://localhost:${port}`);
});
