import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

const CategoryProducts = ({ categoryFromHome }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(categoryFromHome || "");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // ✅ Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // const res = await axios.get("http://localhost/jk/ecron/category_api.php");
        const res = await axios.get("https://erconind.com/ercon/category_api.php");
        if (res.data.status === "success") {
          const reversedCategories = res.data.data.reverse();
          setCategories(reversedCategories);
          if (!categoryFromHome && reversedCategories.length > 0) {
            setSelectedCategory(reversedCategories[0].category_name);
          }
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load categories");
      }
    };
    fetchCategories();
  }, [categoryFromHome]);

  // ✅ Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // const res = await axios.get("http://localhost/jk/ecron/product_api.php");
        const res = await axios.get("https://erconind.com/ercon/product_api.php");
        if (res.data.status === "success") {
          // Reverse products array
          const reversedProducts = res.data.data.reverse();
          setProducts(reversedProducts);
        }
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load products");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Update selected category if passed from home
  useEffect(() => {
    if (categoryFromHome) setSelectedCategory(categoryFromHome);
  }, [categoryFromHome]);

  // Filtered products by category
  const filteredProducts = products.filter(
    (p) =>
      selectedCategory &&
      p.category?.toLowerCase() === selectedCategory.toLowerCase()
  );

  if (loading)
    return (
      <div className="w-full h-[70vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-t-blue-600 border-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  if (error)
    return (
      <div className="w-full h-[70vh] flex items-center justify-center text-red-500">
        {error}
      </div>
    );

  return (
    <div className="w-full my-10 md:px-0 px-10">
      {/* Categories */}
      <div className="flex flex-wrap gap-6 justify-center w-full md:w-[80%] mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.category_name)}
            className={`text-lg uppercase font-semibold cursor-pointer transition
              ${
                selectedCategory === cat.category_name
                  ? "text-[#FF5C3F]"
                  : "text-gray-600 hover:text-[#FF5C3F]"
              }`}
          >
            {cat.category_name}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-center mt-10 gap-10 md:px-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="shadow-xl rounded-xl cursor-pointer"
              onClick={() =>
                navigate(`/SingleCardPaage/${product.id}`, { state: { product } })
              }
            >
              <img
                src={product.image1}
                alt={product.title}
                className="w-full object-contain border-b-2 pb-2 border-gray-200 mix-blend-multiply aspect-square rounded-t-xl"
                loading="lazy"
              />
              <div className="py-6">
                <h1 className="text-lg font-semibold text-center">{product.title}</h1>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No products found</p>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
