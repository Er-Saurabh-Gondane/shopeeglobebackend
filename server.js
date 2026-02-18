const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./src/config/database.js');
const e = require('express');

// load env
dotenv.config();
const app = express();


// connect db
connectDB();
// middlewares
app.use(express.json());

app.listen(process.env.PORT,()=>{
    console.log(`App is listening at PORT ${process.env.PORT}`)
})

