const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const database = require('./config/database.config');
const indexRouter = require('./routes/index.router');
const { log } = require('winston');

const PORT = 3000;

const app = express();

database.connect();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/taller02', indexRouter);

app.use((req, res, next) => {
    res.status(404).json({ message: '404 Not Found' });
});

app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

module.exports = app;