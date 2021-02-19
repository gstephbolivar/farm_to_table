import React from "react";
import "./outOfSeasonCat.css";

const OutOfSeasonCategory = (props) => {
  return (

    <div className="panel">
        <div
          id="OOS-cat"
          className="panel-block block-hover"
          onClick={props.handleOutOfSeasonClick}
        >
          <div
            className="subtitle"
            id="cat-items-subtitle"
            onClick={props.handleOutOfSeasonClick}
          >
           Out of Season
          </div>
        </div>

    </div>
    
 );
};

export default OutOfSeasonCategory;


