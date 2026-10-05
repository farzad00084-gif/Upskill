import React from "react";

function BlogCard({ image, category, title, date, description }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition">
      <img src={image} alt={title} className="w-full h-56 object-cover" />

      <div className="p-6">
        <p className="text-blue-600 text-sm font-semibold mb-3">{category}</p>

        <h2 className="text-xl font-bold text-gray-900 leading-7 mb-3">
          {title}
        </h2>

        <p className="text-sm text-gray-400 mb-4">{date}</p>

        <p className="text-gray-500 leading-6 mb-5">{description}</p>

        <a href="#" className="text-blue-600 font-semibold hover:underline">
          Read More &rarr;
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
