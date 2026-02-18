const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./src/config/database.js');
const authRoutes = require('./src/routes/auth.js')
const productRoutes = require('./src/routes/productRoutes.js');
const cartRoutes = require("./src/routes/cartRoutes.js")
const { notFound, errorHandler } = require("./src/middleware/errorMiddleware.js");
const PORT = process.env.PORT || 5000;
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
// product routes
app.use("/products", productRoutes);
// cart routes
app.use("/cart", cartRoutes);

//  error handling middleware 
app.use(notFound);
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`App is listening at PORT ${PORT}`)
})

