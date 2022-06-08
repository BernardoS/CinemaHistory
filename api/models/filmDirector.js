//library imports
import mongoose from 'mongoose';

const filmDirectorSchema = mongoose.Schema({
    idFilm:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Film"
    },
    idDirector:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Director"
    }
});

const FilmDirector = mongoose.model('FilmDirector',filmDirectorSchema);

export default FilmDirector;