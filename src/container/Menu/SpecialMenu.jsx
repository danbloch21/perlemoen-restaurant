import React, { useState } from "react";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import { MdOutlineRestaurantMenu } from "react-icons/md";
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
          <p className="app__specialMenu-menu_heading">BEERS & CIDERS</p>
          <div className="app__specialMenu_menu_items">
            {data.beers.map((beer, index) => (
              <MenuItem
                key={beer.title + index}
                title={beer.title}
                price={beer.price}
                tags={beer.tags}
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
          <p className="app__p-opensans">
            Virgin versions of some cocktails available
          </p>
        </div>
      </div>
      <div className="app__specialmenu-buttons">
        <button
          onClick={() => setToggleMenu(true)}
          type="button"
          className="custom__button wines"
        >
          WINES
        </button>
        {toggleMenu && (
          <div className="app__specialmenu-wines_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <div className="app__specialMenu-title">
        <SubHeading title="DRINKS" />
        <h1 className="headtext__poiret">WINES</h1>
      </div>
          </div>
        )}

        <button type="button" className="custom__button spirits">
          SPIRITS & LIQUEURS
        </button>

        <button type="button" className="custom__button lunch">
          LUNCH MENU
        </button>

        <button type="button" className="custom__button dinner">
          DINNER MENU
        </button>

        <button type="button" className="custom__button soft">
          SOFT DRINKS
        </button>

        <button type="button" className="custom__button beverages">
          BEVERAGES
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
