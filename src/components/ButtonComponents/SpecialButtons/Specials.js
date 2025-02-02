import {SpecialButton} from "./SpecialButton"
import React, { useState } from "react";
import {specials} from "../../../data";


//import any components needed

//Import your array data to from the provided data file

const Specials = () => {

  const [SpecialState, setSpecialState] = useState(specials);
  // STEP 2 - add the imported data to state

  return (
    <div className='specials'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {SpecialState.map(special => {
         return <SpecialButton specialButton = {special}/>
       })
       }
    </div>
  );
};

export default Specials