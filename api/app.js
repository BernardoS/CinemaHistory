//library imports
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

//local imports
import periodRouter from './routes/periodRouter.js';
//import  filmRouter from './routes/filmRouter.js';
//import topicRouter from './routes/topicRouter.js';
//import directorRouter from './routes/directorRouter.js';




export default function appFactory(){
    const app = express();

    //server usage parameters
    app.use(express.urlencoded({limit:"30mb",extended:true}));
    app.use(express.json({limit:"30mb",extended:true}));
    app.use(cors());

    //routes configurations
    app.use('/period',periodRouter);
    const DB_NAME = "cinemaHistory";
    const CONNECTION_URL = `mongodb+srv://random:159753@bernardocluster.qsmmi.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
    const PORT = process.env.PORT || 8080;

    mongoose.connect(CONNECTION_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify: false 
    }).then(()=>
        {
            app.listen(PORT,()=>{
                console.log(`Server running on port:${PORT}`)
            });
        }
    )
    .catch((error)=>console.log(error));

}