import { NumberButton } from './NumberButton.js' //imported the numbers
import { numbers } from "../../../data";
import React, { useState } from "react";



//import any components needed

//Import your array data to from the provided data file

console.log(numbers)

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  console.log(numberState)

  return (
    <div className='numbers'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Passs
       it any props needed by the child component*/}
      {numberState.map(number => {
        return <NumberButton number={number}  />
      })
      }
    </div>
  );
};


export default Numbers