import React from "react";
import { buttonorder, buttonstyle } from "./Styles";

function CategoryButtons() {
  const categories = [
    "All",
    "Accounting And Finance",
    "AI",
    "Backend Developmen",
    "Cloud Computing",
    "Data Science",
    "Digital Marketing",
    "Entrepreneurship",
    "Freelancing",
    "Frontend Developmen",
    "Game Developmen",
    "Graphic Design",
    "Microsoft Office",
    "Mobile Developmen",
    "UI/UX Design",
    "Video Editing & Animation",
    "Web Developmen",
  ];

  return (
    <div className={buttonorder}>

      {categories.map((category) => (
        <button
          key={category}
          className={buttonstyle}
        >
          {category}
        </button>
      ))}

    </div>
  );
}

export default CategoryButtons;