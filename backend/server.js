const express=require('express');
const app=express();
require('dotenv').config();

const PORT=process.env.PORT;

const callDB=require('./config/Db')

callDB();


app.get('/',(req,res)=>{
    res.send('I am root route');
})

app.listen(PORT,()=>{
    console.log(`Server listing on  http://localhost:${PORT}`);
})