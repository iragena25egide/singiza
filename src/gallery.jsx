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
    <div className="relative w-full flex justify-center p-4 mt-10">
      {/* Title for the gallery at the top of the container */}
      <h2 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xl font-bold mb-12"style={{fontSize:40}}>New in <span className="text-lightblue4">stock</span></h2> {/* Moved title */}
      <h2 className="absolute top-12 left-1/2 transform -translate-x-1/2 text-xl font-bold mb-10 "style={{fontSize:30}}>Wall-<span className="text-lightblue4">Mounted</span> Table</h2> {/* Moved title */}

      {/* Gallery Container */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-[2px] left-20 max-w-[90%] md:max-w-[80%]">
        {/* Adjust left-20 placement for larger screens */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="w-full max-h-[260px] object-cover cursor-pointer" // Set fixed height to create a square-like ratio
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
