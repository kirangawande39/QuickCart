const mongoose=require('mongoose');

const categorySchema=new mongoose.Schema({
    name:String,
    parnet:{tpye:mongoose.Schema.Types.ObjectId,ref:'Category'}
});


module.exports=mongoose.model('Category',categorySchema);

