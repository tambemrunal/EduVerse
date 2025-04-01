import React from "react";
import './CategoryNavbar.css'
const categories = [
  "All Courses",
  "Business",
  "Development",
  "Data Science",
  "Cloud Computing",
  "Cyber Security",
  "Math & Logic",
  "Personal Development",
  "Economics",
  "Data Structures & Algorithms"
];

const CategoryNavbar = ({ setSelectedCategory}) => {
  return (
    <nav className="category-navbar">
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => {setSelectedCategory(category); console.log("category get selected")}}>
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryNavbar;
