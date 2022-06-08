//library imports
import mongoose from "mongoose";

//local imports
import Director from "../models/director.js";
import Film from "../models/film.js";
import FilmDirector from "../models/filmDirector.js";


//#region GET Requisitions
export const getAllDirectors = async (req,res) =>{
  try {
      const response = await Director.find();

      res.status(200).json(response);
  } catch (error) {
      console.log(error);
      res.status(404).send('Error getting all the directors');
  }
}

export const getDirector = async (req,res) =>{
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).send('Invalid ID format');
  }
  try {
      const response = await getDirector.findById(id);

      res.status(200).json(response);
  } catch (error) {
      console.log(error);
      res.status(404).send('Error getting this director');
  }
}

//TO DO
export const getFilmsByDirector = async (req, res) => {
  const { idDirector } = req.params;
  if(!mongoose.Types.ObjectId.isValid(idDirector)){
    return res.status(404).send('Invalid ID format');
  }
  try {

    const response = await FilmDirector.find({ idDirector }).populate(
      "idDirector"
    );

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(404).send('Error getting the films from this director');
  }
};

//#endregion

//#region POST Requisitions
export const createDirector = async (req,res) =>{

  const { 
    name,
    bio,
    birth
  } = req.body;

  const director = new Director({
      name,
      bio,
      birth,
  })
  try {
      await director.save();

      res.status(201).json({
          message:"Director registered"
      });
  } catch (error) {
      console.log(error);
      res.status(404).send('Director could not be created');
  }
}

//#endregion

//#region PATCH Requisitions

export const updateDirector = async (req,res) =>{
  const {id} = req.params;
  const { 
    name,
    bio,
    birth
  } = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).send('Invalid ID format');
  }

  try {
      await Director.findByIdAndUpdate(id,{
        name,
        bio,
        birth
      });

      res.status(202).json({
          message:"Director updated"
      });
  } catch (error) {
      console.log(error);
      res.status(404).send('Director could not be updated');
  }
}

//#endregion

//#region DELETE Requisitions

export const deleteDirector = async (req,res) =>{
  const {id} = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).send('Invalid ID format');
  }
  try {
      await Director.findByIdAndDelete(id);
      res.json({
          message:'Director deleted with success'
      });
  } catch (error) {
      console.log(error);
      res.status(404).send('Director could not be deleted');
  }

}

//#endregion