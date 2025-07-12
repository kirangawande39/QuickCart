const mongoose=require('mongoose');

const addressSchema=new mongoose.Schema({
  user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},  
  street:String,
  city:String,
  state:String,
  postalCode:String,
  country:String,
  isDefalut:Boolean
});

module.exports=mongoose.model('Address',addressSchema);