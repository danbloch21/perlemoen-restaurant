import React, { useState } from "react";
import WinesOverlay from "../../components/WinesOverlay/WinesOverlay";

const MenuButtons = () => {
  const [overlay, setOverlay] = useState(null);
  const renderOverlay = (value) => {
    if (!value) {
      return;
    } else if (value === "wines") {
      return (
        <div className="app__specialMenu-smallscreen">
          <WinesOverlay />
        </div>
      );
    }
  };

  return (
    <div className="app__specialMenu-buttons">
      <button
        onClick={(renderOverlay) => setOverlay("wines")}
        type="button"
        className="custom__button"
      >
        WINES
      </button>

      <button type="button" className="custom__button">
        SPIRITS & LIQUEURS
      </button>

      <button type="button" className="custom__button">
        LUNCH MENU
      </button>

      <button type="button" className="custom__button">
        DINNER MENU
      </button>

      <button type="button" className="custom__button">
        SOFT DRINKS
      </button>

      <button type="button" className="custom__button">
        BEVERAGES
      </button>
    </div>
  );
};

export default MenuButtons;
