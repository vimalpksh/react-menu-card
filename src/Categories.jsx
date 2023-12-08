import React from "react";

const Categories = ({ categories, filterCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <button
          type="button"
          className="filter-btn"
          key={index}
          onClick={() => filterCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
