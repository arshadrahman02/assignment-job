import React from "react";

const Category = ({ category }) => {
  const { category_name, category_logo, jobs_available, image } = category;
  return (
    <div className="bg-gray-100 text-black m-3 p-5  rounded">
      <img className="w-1/4 my-5" src={category_logo} alt="" />

      <h1 className="font-bold font-serif "> {category_name}</h1>

      <small>{jobs_available}</small>
    </div>
  );
};

export default Category;
