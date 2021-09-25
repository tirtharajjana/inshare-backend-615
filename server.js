const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

const corsOptions = {
    origin: process.env.ALLOWED_CLIENTS.split(',')
    // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
}
app.use(cors(corsOptions));
app.use(express.json());
const connectDB = require('./config/db');
connectDB();

app.use(express.static('public'));
//template engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Routes 
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Your server is running on port http://localhost/${PORT}`))