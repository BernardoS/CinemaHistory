//library imports
import mongoose from 'mongoose';

const topicSchema = mongoose.Schema({
    title:String,
    content:String,
    image:String,
    cardImage:String,
    idPeriod:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Period"
    }
});

const Topic = mongoose.model('Topic',topicSchema);

export default Topic;
