import React from "react";

const CategoryHeader = ({ title }) => (
  <div style={{ marginTop: "1rem" }}>
    <p
      className="app__specialMenu-menu_heading"
      style={{ letterSpacing: "0.1em" }}
    >
      {title}
    </p>
  </div>
);

export default CategoryHeader;
