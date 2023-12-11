const express=require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT=process.env.PORT;
app.get('/home', (req, res)=>{
    res.json({message:"OK"});
});
app.listen(PORT,()=>{
    console.log(`Server is started at Port ${PORT}`)
});