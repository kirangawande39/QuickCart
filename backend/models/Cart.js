const mongoose=require('mongoose');

const cartSchema=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    itmes:[
        {
            product:{type:mongoose.Schema.Types.ObjectId,ref:"Product"},
            quantity:Number
        }
    ],
    updatedAt:{type:Date,default:Date.now}
});

module.exports=mongoose.model('Cart',cartSchema);