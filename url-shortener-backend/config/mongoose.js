require('dotenv').config();
const mongoose = require('mongoose');

const mongodb_URI = mongodb+srv://rygbu2407:D5zloqnKXtHCoxwX@cluster0.yxm897h.mongodb.net/

mongoose.connect(mongodb_URI, { userNewUrlParser: true, userUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.log.bind(console, 'Error in connecting yo MongoDB'));

db.once('open', () =>{
    console.log('connected to Database :: Mongodb');
});



module.exports = mongoose;







// CREATE DATABASE your_database_name;

// \c your_database_name

// CREATE TABLE links (
//     id SERIAL PRIMARY KEY,
//     original_url TEXT,
//     short_url TEXT,
//     created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
//     expiry_at TIMESTAMPTZ
// );
