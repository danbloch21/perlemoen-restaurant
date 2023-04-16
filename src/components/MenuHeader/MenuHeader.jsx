import React from "react";

const MenuHeader = ({ title }) => (
  <div style={{ marginTop: "1rem" }}>
    <h1 className="headtext__poiret" style={{ letterSpacing: "0.09em" }}>
      {title}
    </h1>
  </div>
);

export default MenuHeader;
