import mongoose from 'mongoose';
const mongoose = require('mongoose');
function connectToDatabase(){
    mongoose.connect('mongodb+srv://annrichexams2024:annrich2024@cluster0.j2bul1w.mongodb.net/')
        .then(() => {
            console.log('Connected to MongoDB');     
    })
}
module.exports = connectToDatabase;
