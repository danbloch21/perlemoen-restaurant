import React, { useState } from "react";
import WinesOverlay from "../../components/WinesOverlay/WinesOverlay";

const MenuButtons = () => {
  const [overlay, setOverlay] = useState(null);

  return (
    <div className="app__specialMenu-buttons">
      <button
        onClick={() => setOverlay("wines")}
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
