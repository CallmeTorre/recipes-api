const logger = require('./configuration/logger.js');
const loggerMiddleware = require('./middlewares/logger.js');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

dotenv.config();

app.use(cors());
app.use(loggerMiddleware);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  logger.info(req);
  res.send('Thanks');
});

app.listen(process.env.PORT, () => {
  logger.info(`Example app listening on port ${process.env.PORT}!`);
});