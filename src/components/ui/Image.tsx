import React from "react";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <img
        src={src}
        alt={alt}
        className={`object-cover w-full h-full ${className}`}
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/fallback.jpg";
        }}
      />
    </div>
  );
};

export default Image;
