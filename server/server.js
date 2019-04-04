require('dotenv').config();
const express = require('express'),
session = require('express-session'),
massive = require('massive');

//controllers
const authCtrl = require('./controllers/auth');

const app = express(),
{SERVER_PORT} = process.env;

app.use(express.json());

app.listen(SERVER_PORT, () => {
    console.log(`we in here with ${SERVER_PORT} pandas`)
});

//endpoints

app.post(`/auth/login`, authCtrl.login);