const mongoose = require('mongoose');
require('dotenv').config();

function connectDB() {
    //Database connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL , { useNewUrlParser: true, useUnifiedTopology: true });
    const connection = mongoose.connection;

    try {
        connection.once('open', () => {
            console.log('Database connected');
        })
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;