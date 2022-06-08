//library imports
import mongoose from 'mongoose';

const periodSchema =  mongoose.Schema({
    title:String,
    beginYear:Date,
    endYear:Date,
});

const Period =  mongoose.model('Period',periodSchema);

export default Period;