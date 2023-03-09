import React, { useState } from "react";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="DRINKS" />
        <h1 className="headtext__poiret">WHAT’S YOUR TIPPLE?</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu-menu_heading">
            METHODE CAP CLASSIQUE WINES
          </p>
          <div className="app__specialMenu_menu_items">
            {data.champagnes.map((champagne, index) => (
              <MenuItem
                key={champagne.title + index}
                title={champagne.title}
                price={champagne.price}
                tags={champagne.tags}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu img" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading">COCKTAILS</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className="app__specialmenu-smallscreen"
        style={{ marginTop: "15px" }}
      >
        <button
          onClick={() => setToggleMenu(true)}
          type="button"
          className="custom__button"
        >
          VIEW MORE
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
