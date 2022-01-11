const express = require('express');
const cors = require('cors');

const app = express();
const cors = require('cors');

app.use(cors({optionsSuccessStatus: 200}));

app.get('/', (req, res) => {
    res.send('Hello World!')
  })