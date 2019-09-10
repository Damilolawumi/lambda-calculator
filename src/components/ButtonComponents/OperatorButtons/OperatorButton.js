import React from "react";

const NumberButton = (props) => {
  const OperatorButton = () => {
    return (
      <button>
        {/* Display a button element rendering the data being passed down from the parent container on props */}
        {props.number}
      </button>

    );
  };

  export {OperatorButton}