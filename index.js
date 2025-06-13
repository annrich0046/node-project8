import MyUser from './mongodbmodel/schema.js';

import express from 'express';
import cors from 'cors';
import connectToDatabase from './mongodbconfig.js';
// const { connect } = require('mongoose');
 // Assuming this is the correct path to your model
const app = express();
app.use(cors());
app.use(express.json());

app.get('/getdata/:id',(req,res)=>{
    console.log(req.params.id);
    res.send("trial");
});
app.post('/createdata',async(req,res)=>{ 
    const data =req.body;
    console.log(data);
    const createUser = await MyUser.create(data);
    console.log(createUser);
    res.send(createUser);
    res.send('Data received'); 
});


const port=3001; 
app.listen(port,()=>{
console.log("server running on port",{port});
});

connectToDatabase();