// src/App.js
import React, { useState } from "react";
import menu from "../assets/data.js";
import "./FoodItem.css"

const FoodItem = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Get unique categories from menu
    const categories = ["all", ...new Set(menu.map((item) => item.category))];

    const filterMenu = (category) => {
        setSelectedCategory(category);
    };

    const filteredMenu =
        selectedCategory === "all"
        ? menu
        : menu.filter((item) => item.category === selectedCategory);

    return (
      <div className="all-container">
        <div className="title">
          <h1>Ethiopian Menu</h1>
          <div></div>
        </div>
        <div>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => filterMenu(category)}
              style={{ margin: "5px", padding: "10px" }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="foods-container">
          {filteredMenu.map((item) => (
            <div key={item.id} className="single-food">
              <img src={item.img} alt={item.title} />
              <div className="food-desc">
                {/* <h3>{item.title}</h3> */}
                <div className="title-price">
                  <h3>{item.title}</h3>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <p>
                  {/* {item.desc} */}
                  {item.desc.length > 220 ? item.desc.substring(0, 200) + "..." : item.desc}
                </p>
                {/* desc= */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default FoodItem;
