import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProductSearch() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [highlightIndex, setHighlightIndex] = useState(-1);

  const navigate = useNavigate();

  // ✅ Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/categories");
        const catNames = ["All", ...res.data.map((c) => c.name)];
        setCategories(catNames);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };
    fetchCategories();
  }, []);

  // ✅ Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };
    fetchProducts();
  }, []);

  // Filter suggestions
  const updateSuggestions = (term, category) => {
    const filtered = products.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        p.title.toLowerCase().includes(term.toLowerCase())
    );

    if (term === "") {
      setSuggestions([]);
      setErrorMessage("");
    } else if (filtered.length > 0) {
      setSuggestions(filtered);
      setErrorMessage("");
    } else {
      setSuggestions([]);
      setErrorMessage("No matching product found.");
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setHighlightIndex(-1);
    updateSuggestions(value, selectedCategory);
  };

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setShowDropdown(false);
    updateSuggestions(searchTerm, cat);
  };

  const handleProductClick = (id) => {
    navigate(`/SingleCardPaage/${id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (highlightIndex >= 0 && suggestions[highlightIndex]) {
      navigate(`/SingleCardPaage/${suggestions[highlightIndex]._id}`);
    } else if (suggestions.length === 1) {
      navigate(`/SingleCardPaage/${suggestions[0]._id}`);
    } else if (suggestions.length > 0) {
      setErrorMessage("Please select a product from suggestions.");
    } else {
      setErrorMessage("No matching product found.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex((prev) => (prev + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2 items-center mb-4">
          {/* Category Dropdown */}
          <div className="relative w-48">
            <button
              type="button"
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center justify-between w-full px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              {selectedCategory} <FaChevronDown size={14} />
            </button>
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute z-10 w-full mt-2 bg-white shadow-lg rounded-lg max-h-60 overflow-y-auto"
              >
                {categories.map((cat) => (
                  <div
                    key={cat}
                    onClick={() => handleCategorySelect(cat)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {cat}
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Search Input */}
          <input
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Search product..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>
      </form>

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white border border-gray-300 rounded-md shadow-md overflow-hidden max-h-60 overflow-y-auto"
        >
          {suggestions.map((product, index) => (
            <div
              key={product._id}
              onClick={() => handleProductClick(product._id)}
              className={`px-4 py-2 cursor-pointer border-b last:border-b-0 transition-all ${
                highlightIndex === index ? "bg-blue-500 text-white" : "hover:bg-gray-100"
              }`}
            >
              <div className="font-medium">{product.title}</div>
              <div className="text-xs text-gray-500">{product.category}</div>
            </div>
          ))}
        </motion.div>
      )}

      {errorMessage && suggestions.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-red-500 mt-4"
        >
          {errorMessage}
        </motion.div>
      )}
    </div>
  );
}
