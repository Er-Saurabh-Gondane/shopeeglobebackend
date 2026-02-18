const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./src/config/database.js');
const authRoutes = require('./src/routes/auth.js')

// load env
dotenv.config();
const app = express();


// connect db
connectDB();
// middlewares
app.use(express.json());
app.use(cors());

// auth routes
app.use('/', authRoutes);


app.listen(process.env.PORT,()=>{
    console.log(`App is listening at PORT ${process.env.PORT}`)
})

