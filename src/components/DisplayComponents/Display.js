import React, {useState} from "react";

const Display = (props) => {
  const [resultState, setResultState] = useState('0');
  return <div className="display">{resultState}</div>;

};

export default Display