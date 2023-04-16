import React, { useState } from "react";
import { WinesOverlay } from "../../components";

RenderOverlay = function({ value }) {
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

  <button
    type="button"
    className="custom__button"
    onClick={() => setOverlay("wines")}
  >
    WINES
  </button>;
};

export default RenderOverlay;
