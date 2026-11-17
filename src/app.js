const express = require('express');
const app = express();
const userRouter = require('./modules/users/index.js');
app.use(express.json());
app.use('/api', userRouter);

module.exports = app;