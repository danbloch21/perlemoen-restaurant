import React, { useState } from "react";
import Overlay from "../../components/Overlay/Overlay";

const MenuButtons = () => {
  const [overlay, setOverlay] = useState(
    null
  ); /** establishes a state called overlay with an updater called setOverlay. The defaut state is to do nothing */
  const handleClose = () =>
    setOverlay(
      null
    ); /** handleClose function updates the overlay state to do nothing */

  return (
    <div className="app__specialMenu-buttons">
      {" "}
      {/** onClick handler updates state to "wines" */}
      <button
        onClick={() => setOverlay("whites-and-bubbly")}
        type="button"
        className="custom__button"
      >
        WHITES & BUBBLY
      </button>
      {overlay ? <Overlay title={overlay} handleClose={handleClose} /> : null}{" "}
      {/** passes the string that's set in state, e.g wines, as a prop, as well as the handleClose function */}
      <button
        onClick={() => setOverlay("reds-and-rose")}
        type="button"
        className="custom__button"
      >
        REDS & ROSÉ
      </button>
      <button
        onClick={() => setOverlay("spirits-and-liqueurs")}
        type="button"
        className="custom__button"
      >
        SPIRITS & LIQUEURS
      </button>
      <button
        onClick={() => setOverlay("softdrinks-and-beverages")}
        type="button"
        className="custom__button"
      >
        HOT & COLD BEVERAGES
      </button>
      <button type="button" className="custom__button">
        LUNCH{" "}
      </button>
      <button type="button" className="custom__button">
        DINNER
      </button>
    </div>
  );
};

export default MenuButtons;
