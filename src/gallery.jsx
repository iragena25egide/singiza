import { useState } from "react";

const Gallery = () => {
  const images = [
    "../image/table/1.png",
    "../image/table/2.png",
    "../image/table/3.png",
    "../image/table/4.png",
    "../image/table/5.png",
    "../image/table/6.png",
    "../image/table/7.png",
    "../image/table/8.png",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="relative w-full flex flex-col items-center p-4 mt-10">
      {/* Titles adjusted for mobile responsiveness */}
      <div className="text-center mb-6">
        <h2 className="text-lg sm:text-xl md:text-3xl font-bold">
          New in <span className="text-gray-400">Stock</span>
        </h2>
        <h2 className="text-lg sm:text-xl md:text-3xl font-bold">
          Wall-<span className="text-gray-400">Mounted</span> Table
        </h2>
      </div>

      {/* Gallery Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-w-[95%] sm:max-w-[85%] md:max-w-[80%]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="w-full max-h-[220px] sm:max-h-[240px] md:max-h-[260px] object-cover cursor-pointer rounded"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* Modal for Selected Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
