const express=require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
app.get('/home', (req, res)=>{
    res.json({message:"OK"});
});
PORT=3001
app.listen(PORT,()=>{
    console.log(`Server is started at Port ${PORT}`)
});