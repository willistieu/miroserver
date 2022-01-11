const express = require('express');

const app = express();
const cors = require('cors');

app.use(cors({optionsSuccessStatus: 200}));

app.get('/', (req, res) => {
    res.send('Hello World!')
  })