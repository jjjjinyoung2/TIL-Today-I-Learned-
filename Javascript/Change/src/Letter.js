import React from "react";

export default function Letter(props) {
  console.log("Letter component rendered");
  return (
    <div>
      <button onClick={props.handleChange}>✏Letter</button>
      <h3>{props.letter}</h3>
    </div>
  );
}
