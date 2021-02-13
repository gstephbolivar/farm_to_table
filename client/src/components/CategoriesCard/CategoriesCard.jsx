import React from "react";
import "./catCard.css";

// List of items that user can choose from to filter food options
const menuItems = [
  {
    listText: "All",
    catID: "all"
  },
  {
    listText: "Fruit",
    catID: "fruit",
  },
  {
    listText: "Vegetable",
    catID: "vegetable",
  },
  {
    listText: "Meat",
    catID: "meat",
  },
  {
    listText: "Dairy",
    catID: "dairy",
  },
];

const CategoriesCard = ({ onClick }) => {
  return (

    <div className="panel">
      <p className="panel-heading">Categories</p>
      {menuItems.map((item, key) => (
        <a
          id={item.catID}
          className="panel-block"
          key={key}
          value={item.listText}
          name={item.listText}
          onClick={(e) => {
            onClick(e, item.listText);
          }
        }
        >
          {/* <span className="icon">
          <svg width="30" height="30" viewBox="0 0 10 10" id={item.catID} >
          </svg>
          </span> */}
            <h6 className="subtitle is-6">{item.listText}</h6>
        </a>
      ))}


          {/* <a
          id="fruit"
          className="panel-block"
          value="Fruit"
          name="Fruit"
          onClick={(e) => {
            onClick(e, "Fruit");
          }
        }
        >
          
          <h2 className="subtitle">Fruit</h2>


        </a>

        <a
          id="vegetable"
          className="panel-block"
          value="Vegetable"
          name="Vegetable"
          onClick={(e) => {
            onClick(e, "Vegetable");
          }
        }
        >
          



        </a> */}

   
    </div>

  );
};

export default CategoriesCard;
