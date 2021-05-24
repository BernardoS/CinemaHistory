import mongoose from 'mongoose';
import Period from '../models/period.js';

export const getAllPeriods = async (req,res) =>{
    try {
        const response = await Period.find();

        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

export const getPeriod = async (req,res) =>{
    const {id} = req.params;
    try {
        const response = await Period.findById(id);

        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

export const createPeriod = async (req,res) =>{
    const {title,beginYear,endYear,color} = req.body;
    const period = new Period({
        title,
        beginYear,
        endYear,
        color
    })
    try {
        await period.save();

        res.status(201).json({
            message:"Period registered"
        });
    } catch (error) {
        console.log(error);
    }
}

export const deletePeriod = async (req,res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('No period with this ID');
    }
    try {
        await Period.findByIdAndDelete(id);
        res.json({
            message:'Period deleted with success'
        });
    } catch (error) {
        console.log(error);
    }

}

export const updatePeriod = async (req,res) =>{
    const {id} = req.params;
    const {title,beginYear,endYear,color} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('No period with this ID');
    }

    try {
        await Period.findByIdAndUpdate(id,{
            title,
            beginYear,
            endYear,
            color
        });

        res.status(202).json({
            message:"Period updated"
        });
    } catch (error) {
        console.log(error);
    }
}