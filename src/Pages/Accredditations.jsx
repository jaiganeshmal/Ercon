import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import certificate1 from '../assets/Certificate/Certificate1.jpg'
import certificate2 from '../assets/Certificate/Certificate2.jpg'
import certificate3 from '../assets/Certificate/Certificate3.jpg'

const Accredditations = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Disable scroll when modal open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const certificates = [certificate1, certificate2, certificate3];

  return (
    <>
      {/* Certificates */}
      <div className="p-14 w-full h-auto flex flex-wrap justify-center gap-10">
        {certificates.map((cert, i) => (
          <motion.img
            key={i}
            src={cert}
            alt={`Certificate ${i + 1}`}
            className="max-w-xs cursor-pointer rounded-lg shadow-md"
            loading="lazy"
            onClick={() => setSelectedImage(cert)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/85 bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside image
            >
              <img
                src={selectedImage}
                alt="Zoomed Certificate"
                className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
              />
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Accredditations
