import React from "react";

interface FlipCardProps {
  imageUrl: string;
  hoverText: string;
  overlayText: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  imageUrl,
  hoverText,
  overlayText,
}) => {
  return (
    <div className="group relative w-72 h-96 perspective">
      {/* Card Container */}
      <div className="relative h-full w-full transform transition-transform duration-700 group-hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute inset-0">
          <img
            src={imageUrl}
            alt="Card Background"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white">
            <p className="text-xl font-semibold">{overlayText}</p>
          </div>
        </div>

        {/* Back Side with Hover Text */}
        <div className="absolute inset-0 bg-blue-600 flex items-center justify-center text-white rounded-2xl rotate-y-180 backface-hidden">
          <p className="text-2xl font-bold">{hoverText}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
