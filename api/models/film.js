//library imports
import mongoose from 'mongoose';

const filmSchema = mongoose.Schema({
    title:String,
    releaseDate:Date,
    description:String,
    image:String,
    wherewatch:[String],
    idTopic:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic"
    }
});

const Film = mongoose.model('Film',filmSchema);

export default Film;