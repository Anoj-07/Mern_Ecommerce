import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  // for filters on category
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  // for filters on subcategory
  const toggleSubcategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setSubcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubcategory((prev) => [...prev, e.target.value]);
    }
  };

  // filter products on category and subcategory
  const applyFilter = () => {
    let productsCopy = products.slice();

    //for search
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    //for category 
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    //for subcategory
    if (subcategory.length > 0) {
      productsCopy = productsCopy.filter(
        (item) => subcategory.includes(item.subCategory) // Changed from subcategory to subCategory
      );
    }

    setFilteredProducts(productsCopy);
  };

  const sortProducts = () => {
    let filterCopy = filteredProducts.slice();
    switch (sortType) {
      case 'low-high':
        setFilteredProducts(filterCopy.sort((a, b) => a.price - b.price));
        break;

      case 'high-low':
        setFilteredProducts(filterCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    sortProducts();
  }, [sortType])


  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, subcategory, products, search, showSearch]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-20 border-t-2">
      {/* filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
        </p>
        <img
          className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
          src={assets.dropdown_icon}
          alt=""
        />

        {/* catagory filter  */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"
            } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                onChange={toggleCategory}
                className="w-3 "
                type="checkbox"
                value={"Men"}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleCategory}
                className="w-3 "
                type="checkbox"
                value={"Women"}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleCategory}
                className="w-3 "
                type="checkbox"
                value={"Kids"}
              />
              Kids
            </p>
          </div>
        </div>

        {/* subcatagory filter  */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"
            } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                onChange={toggleSubcategory}
                className="w-3 "
                type="checkbox"
                value={"Topwear"}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleSubcategory}
                className="w-3 "
                type="checkbox"
                value={"Bottomwear"}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleSubcategory}
                className="w-3 "
                type="checkbox"
                value={"Winterwear"}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* right side product list */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-3xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* product sort*/}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2">
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: low to high</option>
            <option value="high-low">Sort by: High to low</option>
          </select>
        </div>
        {/* Map product list */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-6">
          {filteredProducts.map((items, index) => (
            <ProductItem
              key={index}
              name={items.name}
              id={items._id}
              price={items.price}
              image={items.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
