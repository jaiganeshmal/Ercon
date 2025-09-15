import React, { Suspense, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { productAssets } from "../assets/global";
import Loader from "../Componants/Loader";
import { useLocation } from "react-router-dom";
const IndustryServe = React.lazy(() => import("../Componants/IndustryServe"));
const ProductSearch = React.lazy(() => import("../Componants/ProductSearch"));
const CategoryProducts = React.lazy(() =>
  import("../Componants/CategoryProducts")
);

const Products = () => {
  const location = useLocation();
  const categorySectionRef = useRef(null);

  // scroll to category section if coming from home
  useEffect(() => {
    if (location.state?.scrollTo === "category" && categorySectionRef.current) {
      categorySectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  return (
    <>
      <motion.div
        className="w-full h-[80vh] relative"
        style={{
          backgroundImage: `url(${productAssets.images42})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-white/40 flex justify-center items-center">
          <motion.h1
            className="text-6xl font-bold"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Product Division
          </motion.h1>
        </div>
      </motion.div>
      <Suspense fallback={<Loader />}>
        <IndustryServe />
        <ProductSearch />
        <div ref={categorySectionRef}>
          <CategoryProducts categoryFromHome={location.state?.category} />
        </div>
      </Suspense>
    </>
  );
};

export default Products;
