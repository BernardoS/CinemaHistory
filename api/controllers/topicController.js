//library imports
import mongoose from "mongoose";

//local imports
import Topic from "../models/topic.js";

//#region GET Requisitions
export const getAllTopics = async (req, res) => {
  try {
    const response = await Topic.find();

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(404).send('Error getting all the Topics');
  }
};
export const getTopic = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Invalid ID format");
  }
  try {
    const response = await Topic.findById(id);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(404).send('Error getting the Topic');
  }
};
export const getTopicByPeriod = async (req, res) => {
  const { idPeriod } = res.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Invalid ID format");
  }
  try {
    const response = await Topic.find({ idPeriod }).exec();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(404).send('Error getting the Topic by Period');
  }
};
//#endregion

//#region POST Requisitions

export const createTopic = async (req, res) => {
  const { title, content, image, cardImage, idPeriod } = req.body;
  const topic = new Topic({
    title,
    content,
    image,
    cardImage,
    idPeriod,
  });
  try {
    await topic.save();

    res.status(201).json({
      message: "Topic registred",
    });
  } catch (error) {
    console.log(error);
    res.status(404).send('Topic could not be created');
  }
};
//#endregion

//#region PATCH Requisitions
export const updateTopic = async (req, res) => {
  const { id } = req.params;
  const { title, content, image, cardImage, idPeriod } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Invalid ID format");
  }
  try {
    await Topic.findByIdAndUpdate(id, {
      title,
      content,
      image,
      cardImage,
      idPeriod
    });

    res.status(202).json({
        message:"Topic updated"
    });
  } catch (error) {
      console.log(error);
      res.status(404).send('Topic could not be updated');
  }
};
//#endregion

//#region DELETE Requisitions
export const deleteTopic = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Invalid ID format");
  }
  try {
    await Topic.findByIdAndDelete(id);
    res.json({
      message: "Topic deleted with success",
    });
  } catch (error) {
    console.log(error);
    res.status(404).send('Topic could not be deleted');
  }
};
//#endregion