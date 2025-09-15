import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleCardPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]); // array of images
  const [imageIndex, setImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        const data = res.data;

        // Backend me image1 aur image2 fields hain
        const imgs = [data.image1, data.image2].filter(Boolean); // remove nulls if any
        setImages(imgs);

        setProduct(data);
      } catch (err) {
        console.error(err);
        setError('Product not found');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-[70vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-t-blue-600 border-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-red-500">{error}</h2>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen p-4 md:p-14 ">
      <div className="flex flex-col md:flex-row justify-center items-start gap-10">
        {/* Images */}
        <div className="w-full md:w-[40%]">
          <img
            src={`http://localhost:5000/uploads/${images[imageIndex]}`}
            alt={product.title}
            className="w-full h-[60vh] md:h-[80vh] object-contain rounded-xl shadow-lg"
          />
          <div className="flex gap-2 mt-4">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={`http://localhost:5000/uploads/${img}`}
                alt={`${product.title} ${idx + 1}`}
                onClick={() => setImageIndex(idx)}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border ${
                  idx === imageIndex ? 'border-blue-500' : 'border-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="w-full md:w-[40%]">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-blue-800">{product.title}</h1>
          <p className="text-base md:text-xl text-gray-700 mb-4">
            <strong>Category:</strong> {product.category}
          </p>
          <p className="text-base md:text-xl text-gray-700">
            <strong>Description:</strong> {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCardPage;
