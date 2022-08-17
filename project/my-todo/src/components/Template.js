import React from "react";
import "./Template.css";

const Template = ({ children, todoLength }) => {
  return (
    <div className="Template">
      <div className="title">Check List ({todoLength})</div>
      <div>{children}</div>
    </div>
  );
};

export default Template;
