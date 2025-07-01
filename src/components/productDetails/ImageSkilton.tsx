import React from "react";

const ImageSkilton = () => {
  return (
    <div className="main-image relative min-h-[397px] md:h-[651px] rounded border border-color overflow-hidden flex-1 w-full animate-pulse">
      <div className="absolute top-[15px] end-[15px] w-10 h-10 rounded-full bg-gray-300 z-10" />
      <div className="absolute inset-0 bg-gray-200" />
      <div className="absolute bottom-[15px] end-[15px] w-10 h-10 rounded border border-color bg-gray-300 flex-c z-10" />
    </div>
  );
};

export default ImageSkilton;
