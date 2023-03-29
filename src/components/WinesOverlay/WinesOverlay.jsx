import React from "react";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const WinesOverlay = ({ wines }) => (
  <div className="app__wineList flex__center section__padding" id="wines">
    <div className="app__wineList-title">
      <SubHeading title="DRINKS" />
      <h1 className="headtext__poiret" style={{ letterSpacing: "0.09em" }}>
        WINES
      </h1>
    </div>
    <div className="app__wineList-menu">
      <p
        className="app__wineList-menu_heading"
        style={{ letterSpacing: "0.1em" }}
      >
        METHODE CAP CLASSIQUE
      </p>
      <div className="app__wineList_menu_items">
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
);

export default WinesOverlay;
