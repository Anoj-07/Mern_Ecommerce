import {v2 as cloudinary} from 'cloudinary';
import productModel from '../models/productsModel.js';

// function for add product
const addProducts = async (req, res)=>{
    try {
        const {name, description, price, category, subcategory, size, bestseller} = req.body;
        // to add images
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter((item)=> item !== undefined);

        //upload images to cloudinary
        let imageUrls = await Promise.all(images.map(async (item)=>{
            let result = await cloudinary.uploader.upload(item.path, {resource_type:'image'});
            return result.secure_url;
        }))

       //-----------------to save data in database-------------------------------
       const productData = {
        name, 
        description,
        price: Number(price),
        category,
        subcategory,
        size: JSON.parse(size),
        bestseller: bestseller === 'true' ? true : false,
        image: imageUrls,
        date: Date.now()
       }

       console.log(productData);
       const product = new productModel(productData);

       //save data in database
       await product.save();
       res.json({success: true, message: 'Product added successfully'});

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

// function for  listProducts
const listProducts = async (req, res)=>{
    try {
        const products = await productModel.find({});
        res.json({success: true, products});

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

// function for  removeProduct
const removeProduct = async (req, res)=>{
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: 'Product removed successfully'});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

// function for info of the singleProduct
const singleProduct = async (req, res)=>{
    try {
        const {productId} = req.body;
        const product = await productModel.findById(productId);

        res.json({success: true, product});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

export {addProducts, listProducts, removeProduct, singleProduct};