import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import axios from 'axios';

// 🔁 Custom Left Arrow
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -translate-y-1/2 left-4 z-10 cursor-pointer"
    onClick={onClick}
  >
    <FaArrowLeft className="text-3xl text-white bg-black rounded-full p-2 shadow-lg" />
  </div>
);

// 🔁 Custom Right Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -translate-y-1/2 right-4 z-10 cursor-pointer"
    onClick={onClick}
  >
    <FaArrowRight className="text-3xl text-white bg-black rounded-full p-2 shadow-lg" />
  </div>
);

const Carousel = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  const API_URL = "http://localhost/jk/ecron/carosal_api.php"; // ✅ PHP API endpoint

  // 🔹 Fetch carousel images from backend
  const fetchCarousel = async () => {
    try {
      const res = await axios.get(API_URL);
      console.log("API Response:", res.data);

      // ✅ Reverse order for latest-first display
      const images = res.data.map(item => item.img_url).reverse();
      console.log("Mapped Images (Reversed):", images);

      setCarouselImages(images);
    } catch (err) {
      console.error("Failed to fetch carousel images:", err);
    }
  };


  useEffect(() => {
    fetchCarousel();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: false,
  };

  return (
    <div className="slider-container relative overflow-hidden w-full">
      <Slider {...settings} className="w-full md:h-[86vh]">
        {carouselImages.length > 0 ? (
          carouselImages.map((image, index) => (
            <div key={index} className="h-[50vh] md:h-[86vh] w-full">
              <img
                src={image}
                alt={`Carousel ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  console.error("Image load failed:", image);
                  e.target.src = "/fallback.jpg"; // ✅ fallback image
                }}
              />
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-[50vh] md:h-[86vh] w-full bg-gray-100">
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 border-4 border-t-blue-600 border-gray-200 rounded-full animate-spin"></div>
              <span className="text-gray-700 font-medium text-lg">Loading carousel...</span>
            </div>
          </div>
        )}
      </Slider>
    </div>
  );
};

export default Carousel;
