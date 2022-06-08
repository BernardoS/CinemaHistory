//library imports
import mongoose from "mongoose";

//local imports
import Film from "../models/film.js";
import FilmDirector from "../models/filmDirector.js";
import Director from "../models/Director.js";


//#region GET Requisitions
export const getAllFilms = async (req, res) => {
  try {
    const response = await Film.find();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(404).send('Error getting all the Films');
  }
};

export const getFilm = async (req, res) => {
  const { id } = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).send('Invalid ID format');
  }
  try {
    const filme = await Film.find(id);
    const filmDirectors = await FilmDirector.find({idFilm:id});
    var diretores = "Não possui diretores cadastrados no sistema";

    if(filmDirectors != null || filmDirectors != undefined || filmDirectors == []){
      diretores = []
      filmDirectors.forEach(async (filmDirector) =>{
        const diretor = await Director.findById(filmDirector.idDirector);
        diretores.push(diretor);
      })
    }
    const response = {
      filme,
      diretores
    }
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(404).send('Error getting the Film');
  }
};

export const getFilmByTopic = async (req, res) => {
  const { idTopic } = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).send('Invalid ID format');
  }
  try {
    const response = await Film.find({ idTopic });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(404).send('Error getting the Film by topic');
  }
};

export const getFilmByDirector = async (req, res) => {
  const { idDirector } = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).send('Invalid ID format');
  }
  try {
    const response = await FilmDirector.find({ idDirector }).populate("idFilm");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(404).send('Error getting the Film by Director');
  }
};

//#endregion

//#region POST Requisitions
export const createFilm = async (req, res) => {
  const { 
    title, 
    releaseDate, 
    description, 
    image, 
    wherewatch, 
    idTopic 
  } = req.body;

  const film = new Film({
    title,
    releaseDate,
    description,
    image,
    wherewatch,
    idTopic,
  });
  try {
    film.save();
    res.status(201).json({
      message: "Film registred",
    });
  } catch (error) {
    console.log(error);
    res.status(404).send('Film could not be created');
  }
};

export const associateFilmDirector = async (req,res) => {

  const { idFilm, idDirector } = req.body;

  const filmDirector = new FilmDirector({
    idFilm,
    idDirector
  });
  try {
    filmDirector.save();
    res.status(201).json({
      message: `Film associated with a director`,
    });
  } catch (error) {
    console.log(error);
  }

}

//#endregion

//#region PATCH Requisitions
export const updateFilm = async (req, res) => {
  const { id } = req.params;
  const { title, releaseDate, description, image, wherewatch, idTopic } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Invalid ID format");
  }

  try {
    await Film.findByIdAndUpdate(id, {
      title,
      releaseDate,
      description,
      image,
      wherewatch,
      idTopic,
    });

    res.status(202).json({
      message: "Film updated",
    });
  } catch (error) {
    console.log(error);
    res.status(404).send('Film could not be updated');
  }
};
//#endregion

//#region DELETE Requistions
export const deleteFilm = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Invalid ID format");
  }
  try {
    await Film.findByIdAndDelete(id);
    res.json({
      message: "Film deleted with success",
    });
  } catch (error) {
    console.log(error);
    res.status(404).send('Film could not be deleted');
  }
};
//#endregion


