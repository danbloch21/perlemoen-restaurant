import React, { useState } from "react";
import { WinesOverlay } from "../../components";

const renderOverlay = (value) => {
  const [overlay, setOverlay] = useState(null);

  if (!value) {
    return;
  } else if (value === "wines") {
    return <WinesOverlay />;
  } else if (value === "spirits") {
    return <SpiritsOverlay />;
  } else if (value === "lunch") {
    return <LunchOverlay />;
  } else if (value === "dinner") {
    return <DinnerOverlay />;
  } else if (value === "softs") {
    return <SoftsOverlay />;
  } else if (value === "beverages") {
    return <BeveragesOverlay />;
  }
};

<div className="app__specialmenu-smallscreen">
  <button
    type="button"
    className="custom__button"
    onClick={() => setOverlay("wines")}
  >
    WINES
  </button>

  {overlay ? (
    <div className="app__specialmenu-smallscreen_overlay flex__center slide-bottom">
      <MdOutlineRestaurantMenu
        fontSize={27}
        className="overlay__close"
        onClick={() => setOverlay(null)}
      />
    </div>
  ) : null}
</div>;

export function renderOverlay();
