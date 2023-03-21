import React, { useState } from "react";
import { SubHeading, WineList, MenuItem } from "../../components";
import { images, data } from "../../constants";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  const [toggleWineList, setToggleWineList] = useState(false);
  const [toggleSpiritList, setToggleSpiritList] = useState(false);
  const [toggleSoftList, setToggleSoftList] = useState(false);
  const [toggleBeverageList, setToggleBeverageList] = useState(false);
  const [toggleLunchMenu, setToggleLunchMenu] = useState(false);
  const [toggleDinnerMenu, setToggleDinnerMenu] = useState(false);

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="DRINKS" />
        <h1 className="headtext__poiret" style={{ letterSpacing: "0.09em" }}>
          WHAT’S YOUR TIPPLE?
        </h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p
            className="app__specialMenu-menu_heading"
            style={{ letterSpacing: "0.1em" }}
          >
            BEERS & CIDERS
          </p>
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
          <p
            className="app__specialMenu-menu_heading"
            style={{ letterSpacing: "0.1em" }}
          >
            COCKTAILS
          </p>
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
        <button type="button" className="custom__button">
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
    </div>
  );
};

export default SpecialMenu;
