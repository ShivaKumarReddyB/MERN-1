import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import  cors from 'cors';

import  postRoutes from "./routes/post.js"

const app = express();


// TODO:check what is config means
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

//middleware
app.use('/posts', postRoutes)


const  CONNECTION_URL="mongodb+srv://boruto:8977shiva@shivamongo.pmm8n.mongodb.net/MERN?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`Server running on port :${PORT}`)))
    .catch((error)=>console.log(error));

mongoose.set('useFindAndModify', false) // its does not get warnings  to console

