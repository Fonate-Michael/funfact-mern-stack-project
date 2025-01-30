import express from 'express';
import cors from  'cors';
import mongoose from 'mongoose';
import Fun from './models/model.js';


const PORT = 8000;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Funfact');
const db = mongoose.connection;

db.once('open', ()=>{
    console.log("Connected to Funfact database hehehe...");
});

db.on('error',(err)=>{
    console.error("An Error occured, " ,{err})
})

app.get('/api/funfact',  async(req, res)=>{
    const funfact = await Fun.find();
    res.json(funfact);
});










app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT} hehehe...`);
})