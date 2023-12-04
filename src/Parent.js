import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor); //initial value is random
  const [childrenColor, setChildrenColor] = useState("FFF");

  function handleChangeColor(newChildColor){
    const newRandomColor = getRandomColor();
    setColor(newRandomColor); // updates color state to new value
    setChildrenColor(newChildColor);
  }
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      {/* pass down the function as a prop to the child component */}
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;
