const express = require('express');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');

const DBConnection = require('./config/db.js');

//Set up express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//Set up mongoDB
dotenv.config({
    path: './config/.env'
})

DBConnection();

if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'));
}

// Route middlewares
const categoryRoutes = require('./routes/categories');
app.use('/api/v1/categories', categoryRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port -> ${PORT}`.cyan.bold);
});