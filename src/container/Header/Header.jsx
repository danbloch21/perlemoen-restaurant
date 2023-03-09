import React from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper-info">
      <SubHeading title="SENSATIONAL SUSTAINABLE SEAFOOD" />
      <h1 className="app__header-h1">Taste The Ocean</h1>
      <p className="app__p-opensans">
        Take a stroll down to Hermanus's Old Harbour, a place steeped in
        history, and drink in the famous “champagne air” while savouring the
        spectacular views of Walker Bay. There is no better spot to sample our
        local delicacy perlemoen, paired with one of our renowned wines from the
        Hemel En Aarde Valley as you experience the sights, sounds and scent of
        the sea. Wherever in the world you are from, we are delighted to welcome
        you to our table.
      </p>
      <button type="button" className="custom__button">
        EXPLORE MENU
      </button>
    </div>
    <div className="app__wrapper-img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
