//library imports
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

//local imports
import periodRouter from './routes/periodRouter.js';
//import  filmRouter from './routes/filmRouter.js';
//import topicRouter from './routes/topicRouter.js';
//import directorRouter from './routes/directorRouter.js';

export default function appFactory(){
    
    const app = express();
    dotenv.config();

    //server usage parameters
    app.use(express.urlencoded({limit:"30mb",extended:true}));
    app.use(express.json({limit:"30mb",extended:true}));
    app.use(cors());

    //enviromental variables configurations


    //routes configurations
    app.use('/period',periodRouter);


    const PORT = process.env.PORT;

    mongoose.connect(process.env.CONNECTION_URL,{
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