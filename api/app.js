import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import periodRouter from './routes/period.js';


export default function appFactory(){
    const app = express();

    //server usage parameters
    app.use(express.urlencoded({limit:"30mb",extended:true}));
    app.use(express.json({limit:"30mb",extended:true}));
    app.use(cors());

    //routes configurations
    app.use('/period',periodRouter);

    const CONNECTION_URL = "mongodb+srv://random:159753@clusterteste.qsmmi.mongodb.net/cinemahistory?retryWrites=true&w=majority" 
    const PORT = process.env.PORT || 8080;

    mongoose.connect(CONNECTION_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify: false 
    }).then(()=>app.listen(PORT,()=>console.log(`Server running on port:${PORT}`)))
    .catch((error)=>console.log(error));

}