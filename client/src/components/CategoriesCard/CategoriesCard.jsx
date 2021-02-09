import React, { useState } from "react";

// List of items that user can choose from to filter food options
const menuItems = [
  {
    listText: "All",
  },
  {
    listText: "Fruit",
  },
  {
    listText: "Vegetable",
  },
  {
    listText: "Meat",
  },
  {
    listText: "Dairy",
  },
];

const CategoriesCard = ({ onChange }) => {
  return (
    // Bulma categories card

    <div className="select">
      <select onChange={onChange}>
        {menuItems.map((item, key) => (
          <option key={key} value={item.listText} name={item.listText}>
            {item.listText}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoriesCard;
