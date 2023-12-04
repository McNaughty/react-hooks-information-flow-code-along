import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {

  function handleClick(){
    const newColor = getRandomColor();
    // passes the random child color back up to the parent to
    // pass it back down as a prop for the children when 
    // the onChangeColor function is called.
    onChangeColor(newColor);
  }

  // console.log(onChangeColor);
  return <div 
  //calls the change color function that is in the parent file
  onClick={handleClick}
  className="child" 
  style={{ backgroundColor: color }} />;
}

export default Child;
