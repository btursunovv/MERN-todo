const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')

const app = express();

app.use(express.json());

const port = process.env.PORT;

app.use(cors());

const TodoItemRoute = require('./routes/todoItems');


mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Mongoose connected'))
.catch(err => console.log(err))

app.use('/', TodoItemRoute);

app.listen(port, () => console.log('Server connected'));