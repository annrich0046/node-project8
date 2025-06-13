import mongoose from 'mongoose';
function connectToDatabase(){
    mongoose.connect('mongodb+srv://annrichexams2024:annrich2024@cluster0.j2bul1w.mongodb.net/form')
        .then(() => {
            console.log('Connected to MongoDB');     
    })
}
export default connectToDatabase;
