import React from "react";

function CategoryButtons() {
  const categories = [
    "All",
    "Accounting & Finance",
    "AI",
    "Backend Development",
    "Cloud Computing",
    "Data Science",
    "Digital Marketing",
    "Entrepreneurship",
    "Freelancing",
    "Frontend Development",
    "Game Development",
    "Graphic Design",
    "Microsoft Office",
    "Mobile Development",
    "UI/UX Design",
    "Video Editing & Animation",
    "Web Development",
  ];

  return (
    <div className="max-w-6xl mx-auto px-5 flex flex-wrap justify-center gap-3 mb-16">

      {categories.map((category) => (
        <button
          key={category}
          className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 cursor-pointer"
        >
          {category}
        </button>
      ))}

    </div>
  );
}

export default CategoryButtons;