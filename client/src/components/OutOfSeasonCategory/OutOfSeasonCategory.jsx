import React from "react";

const OutOfSeasonCategory = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="media" id="card-container-OoS">
          <div className="media-content">
          <div className="field is-multiline has-text-centered is-vcentered" >

          <figure className="image add-icon">
          <i class="far fa-pause-circle fa-4x"></i> 
        </figure>
             <button
              className="button"
              id="outOfSeasonBtn"
              style={{backgroundColor: "#873E97"}}
              onClick={props.handleOutOfSeasonClick}
            >
              Out of Season
            </button>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default OutOfSeasonCategory;
