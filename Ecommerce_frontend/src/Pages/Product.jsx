import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();

  const { products, currency, addToCart } = useContext(ShopContext);
  const [ProductData, SetProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        SetProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])

  return ProductData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-i duration-500 opacity-100">
      {/* product Data */}
      <div className="flex gap-2 sm:gap-12 flex-col sm:flex-row">
        {/* ----------------------------product Image -------------------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              ProductData.image.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  src={item} key={index} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" />
              ))
            }
          </div>

          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" />
          </div>
        </div>

        {/* product Details */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">
            {ProductData.name}
          </h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className="w-3.5" />
            <img src={assets.star_icon} className="w-3.5" />
            <img src={assets.star_icon} className="w-3.5" />
            <img src={assets.star_icon} className="w-3.5" />
            <img src={assets.star_dull_icon} className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency} {ProductData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{ProductData.description}</p>

          <div className="flex flex-col gap-4 my-8">
            <p className="font-bold">Select Size</p>
            <div className="flex gap-2">
              {ProductData.size.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500 ' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>

          <button 
          onClick={()=> addToCart(ProductData._id, size)}
          className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD CART</button>
          <hr className="mt-8 sm:w-[4/5]"/>

          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Orginal producr</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy with 7</p>
          </div>
        </div>
      </div>

      {/* Description and review section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Review(122)</p>
        </div>

        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 ">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi possimus voluptatum, natus laudantium magni id ducimus, non optio eaque repellendus, ad hic quis rem esse consequuntur consequatur ab nostrum praesentium?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, praesentium autem laboriosam, sed cupiditate facere debitis voluptatibus, similique non quisquam sapiente enim quos iusto? Aliquid accusantium blanditiis saepe? Odit, illum.</p>
        </div>
      </div>
      {/* -------------------Display related products -------------------- */}
      <RelatedProducts category={ProductData.category} subCategory={ProductData.subCategory} />
    </div>
    ) : <div className="opacity-0"></div>
}

export default Product
