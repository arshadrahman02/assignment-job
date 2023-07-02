import React from "react";
import { useLoaderData } from "react-router-dom";
import Category from "./Category";

const Categories = ({ categories }) => {
  console.log(categories);
  return (
    <div className="lg:mx-40 mt-6">
      <div className=" grid lg:grid-cols-4">
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
