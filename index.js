const express=require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
app.get('/home', (req, res)=>{
    res.json({message:"OK"});
});
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is started at Port ${PORT}`)
});