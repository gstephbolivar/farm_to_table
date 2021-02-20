import React, { useState } from "react";
import "./catCard.css";

// List of items that user can choose from to filter food options
const items = [
  {
    listText: "All",
    catID: "all",
    selected: true,
  },
  {
    listText: "Fruit",
    catID: "fruit",
    selected: false,
  },
  {
    listText: "Vegetable",
    catID: "vegetable",
    selected: false,
  },
  {
    listText: "Meat",
    catID: "meat",
    selected: false,
  },
  {
    listText: "Dairy",
    catID: "dairy",
    selected: false,
  },
];

const CategoriesCard = ({ onClick }) => {
  const itemsArrayClone = items.map((item) => {
    return { ...item };
  });

  const [menuItems, setMenuItems] = useState(itemsArrayClone);

  const handleClick = (key) => {
    const mapArray = menuItems.map((item, i) => {
      item.selected = i === key;
      return item;
    });
    setMenuItems(mapArray);
  };

  return (
    <div className="panel">
      <p className="panel-heading cat-head">Categories</p>
      {menuItems.map((item, key) => (
        <div
          to="#"
          id={item.selected ? item.catID + "-selected" : item.catID}
          className="panel-block block-hover"
          key={key}
          value={item.listText}
          name={item.listText}
          onClick={(e) => {
            onClick(e, item.listText);
            handleClick(key);
          }}
        >
          <div
            to="#"
            value={item.listText}
            name={item.listText}
            className="subtitle"
            id="cat-items-subtitle"
            onClick={(e) => {
              onClick(e, item.listText);
            }}
          >
            {item.listText}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesCard;
