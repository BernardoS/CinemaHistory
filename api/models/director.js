//library imports
import mongoose from 'mongoose';

const directorSchema =  mongoose.Schema({
    Name:String,
    Bio:String,
    Birth:Date
});

const Director = mongoose.model('Director',directorSchema);

export default Director;