//library imports
import mongoose from 'mongoose';

//local imports
import Period from '../models/period.js';

//#region GET Requistions
export const getAllPeriods = async (req,res) =>{
    try {
        const response = await Period.find();

        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(404).send('Error getting all the Periods');
    }
}

export const getPeriod = async (req,res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('Invalid ID format');
    }

    try {
        const response = await Period.findById(id);

        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(404).send('Period getting the period');
    }
}
//#endregion

//#region POST Requisitions
export const createPeriod = async (req,res) =>{
    const {title,beginYear,endYear} = req.body;
    const period = new Period({
        title,
        beginYear,
        endYear,
    })
    try {
        await period.save();

        res.status(201).json({
            message:"Period registered"
        });
    } catch (error) {
        console.log(error);
        res.status(404).send('Period could not be created');
    }
}
//#endregion

//#region PATCH Requisitions
export const updatePeriod = async (req,res) =>{
    const {id} = req.params;
    const {title,beginYear,endYear,color} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('Invalid ID format');
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
        res.status(404).send('Period could not be updated');
    }
}
//#endregion

//#region DELETE Requisitions
export const deletePeriod = async (req,res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('Invalid ID format');
    }
    try {
        await Period.findByIdAndDelete(id);
        res.json({
            message:'Period deleted with success'
        });
    } catch (error) {
        console.log(error);
        res.status(404).send('Period could not be deleted');
    }

}
//#endregion
