import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

const SingleCardPage = () => {
  const { id } = useParams();
  const location = useLocation();

  const [product, setProduct] = useState(location.state?.product || null);
  const [images, setImages] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const [loading, setLoading] = useState(!product); // agar product state me hai to loading false
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);

    // Agar product state me hai to API fetch ki zarurat nahi
    if (product) {
      setImages([product.image1, product.image2].filter(Boolean));
      setImageIndex(0);
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost/jk/ecron/product_api.php?id=${id}`);

        if (res.data.status === "success" && res.data.data.length > 0) {
          const data = res.data.data[0];
          setProduct(data);
          setImages([data.image1, data.image2].filter(Boolean));
          setImageIndex(0);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        console.error(err);
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, product]);

  if (loading) return <div className="w-full h-[70vh] flex items-center justify-center">Loading...</div>;
  if (error || !product) return <div className="w-full h-screen flex items-center justify-center text-red-500">{error}</div>;

  return (
    <div className="w-full min-h-screen p-4 md:p-14">
      {/* Images */}
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-[40%]">
          <img src={images[imageIndex]} alt={product.title} className="w-full h-[60vh] object-contain rounded-xl shadow-lg" />
          <div className="flex gap-2 mt-4">
            {images.map((img, idx) => (
              <img key={idx} src={img} alt={`${product.title} ${idx + 1}`} onClick={() => setImageIndex(idx)}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border ${idx === imageIndex ? "border-blue-500" : "border-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="w-full md:w-[40%]">
          <h1 className="text-3xl font-bold mb-6 text-blue-800">{product.title}</h1>
          <p className="text-lg mb-4"><strong>Category:</strong> {product.category}</p>
          <p className="text-lg"><strong>Description:</strong> {product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCardPage;
