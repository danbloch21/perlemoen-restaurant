import React from "react";

const CategoryHeader = ({ title }) => (
  <div style={{ marginTop: "0rem" }}>
    <p
      className="app__overlayMenu-menu_heading"
      style={{ letterSpacing: "0.1em", marginBottom: "0rem" }}
    >
      {title}
    </p>
  </div>
);

export default CategoryHeader;
