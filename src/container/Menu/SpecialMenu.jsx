import React, { useState } from "react";
import { SubHeading, MenuItem } from "../../components";
import MenuButtons from "../../components/MenuButtons/MenuButtons";
import { images, data } from "../../constants";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="DRINKS" />
      <h1 className="headtext__poiret" style={{ letterSpacing: "0.09em" }}>
        WHAT’S YOUR TIPPLE?
      </h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_beers flex__center">
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
      <MenuButtons />
    </div>
  </div>
);

export default SpecialMenu;
