import React from "react";
import "./assets/main.css";

const Card = () => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg">
      <img className="w-full" src="https://picsum.photos/1239/800" alt="Sicme" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">España</div>
        <p className="text-base red-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
          eros vel elit fringilla, in sodales tellus vestibulum.
        </p>
      </div>
    </div>
  );
};

export default Card;