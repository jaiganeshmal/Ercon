import React from "react";
import { motion } from "framer-motion";
import { images11, introCategoryData } from "../assets/global";
import { IoMdArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const IntroCategory = () => {
  const navigate = useNavigate();

  // function for navigation with category
  const goToCategory = (categoryName) => {
    navigate("/products", { state: { scrollTo: "category", category: categoryName } });
  };

  return (
    <div className="relative w-full bg-[#F7FAFC] md:py-20 py-10">
      {/* Decorative Top-Right Image (No Animation) */}
      <img src={images11} alt="" className="absolute top-0 right-0" />

      {/* Header Section */}
      <motion.div
        className="flex flex-col items-center gap-6 px-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <motion.h1
          className="text-3xl font-bold text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          viewport={{ once: true }}
        >
          We energize the future with smart, sustainable, and <br />
          reliable power solutions.{" "}
          <span className="text-[#F46100]">At ERCON Industries</span>
        </motion.h1>

        <motion.p
          className="lg:w-[50%] md:w-[70%] w-[90%] text-justify text-lg text-gray-700 font-semibold z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          viewport={{ once: true }}
        >
          With a strong focus on engineering excellence and innovation, we
          specialize in the manufacturing and supply of high-quality switchgear
          systems, solar energy solutions, and cable management systems
          including cable trays.
        </motion.p>
      </motion.div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-16 gap-10 lg:px-10 md:px-5 px-10 mt-10">
        {introCategoryData.map((value, index) => (
          <motion.div
            key={index}
            className={`${value.color} h-[310px] shadow-xl rounded-xl`}
            style={{
              backgroundImage: `url(${value.image})`,
              backgroundSize: "250px",
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
            }}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="w-[60%] h-full px-3 flex flex-col justify-center items-start gap-4">
              <h2 className="font-bold text-[#DB990A]">{value.mainTitle}</h2>
              <h1 className="font-bold text-xl">
                {value.title.slice(0, 21) + "..."}
              </h1>
              <p className="text-gray-600 line-clamp-3">{value.description}</p>
              <button  onClick={() => goToCategory(value.btn)} className="text-[#8225E2] hover:text-[#FF5C39] duration-200 cursor-pointer font-semibold text-sm flex items-center justify-center gap-1">
                More Info <IoMdArrowForward size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IntroCategory;
