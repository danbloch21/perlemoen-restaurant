import React from "react";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const WinesOverlay = ({ wines }) => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="DRINKS" />
      <h1 className="headtext__poiret" style={{ letterSpacing: "0.09em" }}>
        WINES
      </h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wines flex__center">
        <p
          className="app__specialMenu-menu_heading"
          style={{ letterSpacing: "0.1em" }}
        >
          METHODE CAP CLASSIQUE
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
    </div>
  </div>
);

export default WinesOverlay;
