import React from "react";

const NumberButton = (props) => {
  return (
    <button className={`button${props.number}`}> 
      {/* added a button */}
  
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    {props.number} 
    </button>
  );
};


export {NumberButton}