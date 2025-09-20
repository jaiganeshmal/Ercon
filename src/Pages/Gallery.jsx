import React, { useState, useEffect } from "react";
import axios from "axios";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchGallery = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost/jk/ecron/gallery_api.php");

        if (res.data.status === "success" && Array.isArray(res.data.data)) {
          // API ke response se direct image URL use karna
          const images = res.data.data.map((img) => img.image);
          setGalleryImages(images);
        } else {
          setGalleryImages([]);
        }
      } catch (err) {
        console.error("Error fetching gallery:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  // Disable background scroll jab modal open ho
  useEffect(() => {
    document.body.style.overflow = previewImage ? "hidden" : "auto";
  }, [previewImage]);

  if (loading) {
    return (
      <div className="h-[50vh] md:h-[86vh] w-full flex items-center justify-center">
        <div className="bg-white/90 p-6 rounded-lg flex flex-col items-center gap-3 shadow-lg">
          <div className="w-12 h-12 border-4 border-t-blue-600 border-gray-200 rounded-full animate-spin" />
          <div className="text-sm text-gray-700">Loading gallery...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-center">
        Gallery
      </h1>

      {galleryImages.length === 0 ? (
        <p className="text-center text-gray-500">No images to display</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="w-full aspect-[4/3] overflow-hidden rounded-lg shadow-md border border-blue-200 cursor-pointer relative"
              onClick={() => setPreviewImage(image)}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}

      {/* Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative max-w-full max-h-full flex items-center justify-center">
            <img
              src={previewImage}
              alt="Preview"
              className="max-w-full max-h-[80vh] object-contain rounded shadow-lg"
            />
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-2 right-2 text-white text-3xl md:text-4xl bg-black/50 rounded-full p-2 hover:bg-black/70 transition"
            >
              &times;
            </button>
          </div>

          {/* Background click close */}
          <div
            className="fixed inset-0"
            onClick={() => setPreviewImage(null)}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
