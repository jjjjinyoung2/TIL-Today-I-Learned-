import React from "react";

export default function Color(props) {
  console.log("Color component rendered");
  return (
    <div>
      <button onClick={props.handleChange}>Color</button>
      <h3>{props.color}</h3>
    </div>
  );
}
