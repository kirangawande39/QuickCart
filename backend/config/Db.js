const mongoose=require('mongoose');

require('dotenv').config();

const URL=process.env.DB_URL;


 const DB = ()=>{
    try{
        mongoose.connect(URL);
        console.log("MongoDB Connect Sucessfully....");
    }
    catch(err){
        console.error("MongoDB Connection Error:" + err);
    }
}


module.exports=DB;

