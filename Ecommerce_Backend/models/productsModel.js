import mongoose from 'mongoose';

// for the products collection
const productSchema = new mongoose.Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:Number, required:true},
    imageUrl:{type:Array, required:true},
    category:{type:String, required:true},
    subcategory:{type:Number, required:true},
    size:{type:Array, required:true},
    bestseller:{type:Boolean},
    date:{type:Number, required:true},
})

const productModel = mongoose.models.product || mongoose.model('product', productSchema);

export default productModel;