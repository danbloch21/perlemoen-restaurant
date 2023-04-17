import React, { useState } from "react";
import { SubHeading, MenuItem } from "../../components";
import { MenuButtons } from "../../components";
import { data } from "../../constants";
import MenuHeader from "../../components/MenuHeader/MenuHeader";
import CategoryHeader from "../../components/CategoryHeader/CategoryHeader";

import "./Overlay.css";

import { MdOutlineRestaurantMenu } from "react-icons/md";

/** line below receives the two props from MenuButtons file. According to the value held in state for title, it renders on the overlay what's in each if... else condition. handleClose closes the overlay via the knife and sppon icon at the top right of the overlay */

const Overlay = ({ title, handleClose }) => {
  if (title === "wines") {
    return (
      <div className="app__overlay-smallscreen_overlay flex__center slide-bottom">
        <SubHeading title="DRINKS" />
        <MenuHeader title="WHITE WINES" />
        <CategoryHeader title="SPARKLING WINES" />
        <div className="app__overlayMenu-menu">
          <div className="app__overlayMenu-menu_champagnes flex__center">
            <div className="app__overlayMenu_menu_items">
              {data.champagnes.map((champagne, index) => (
                <MenuItem
                  key={champagne.title + index}
                  title={champagne.title}
                  price={champagne.price}
                  tags={champagne.tags}
                />
              ))}
              <div className="app__overlayMenu-menu">
                <div className="app__overlayMenu-menu_sauvignons flex__center">
                  <CategoryHeader title="SAUVIGNON BLANCS" />
                  <div className="app__overlayMenu_menu_items">
                    {data.sauvignons.map((sauvignon, index) => (
                      <MenuItem
                        key={sauvignon.title + index}
                        title={sauvignon.title}
                        price={sauvignon.price}
                        tags={sauvignon.tags}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="app__overlayMenu-menu">
                <div className="app__overlayMenu-menu_chenins flex__center">
                  <CategoryHeader title="CHENIN BLANCS" />
                  <div className="app__overlayMenu_menu_items">
                    {data.chenins.map((chenin, index) => (
                      <MenuItem
                        key={chenin.title + index}
                        title={chenin.title}
                        price={chenin.price}
                        tags={chenin.tags}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="app__overlayMenu-menu">
                <div className="app__overlayMenu-menu_chardonnays flex__center">
                  <CategoryHeader title="CHARDONNAYS" />
                  <div className="app__overlayMenu_menu_items">
                    {data.chardonnays.map((chardonnay, index) => (
                      <MenuItem
                        key={chardonnay.title + index}
                        title={chardonnay.title}
                        price={chardonnay.price}
                        tags={chardonnay.tags}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="app__overlayMenu-menu">
                <div className="app__overlayMenu-menu_viogniers flex__center">
                  <CategoryHeader title="VIOGNIER" />
                  <div className="app__overlayMenu_menu_items">
                    {data.viogniers.map((viognier, index) => (
                      <MenuItem
                        key={viognier.title + index}
                        title={viognier.title}
                        price={viognier.price}
                        tags={viognier.tags}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="app__overlayMenu-menu">
                <div className="app__overlayMenu-menu_whiteblends flex__center">
                  <CategoryHeader title="BLENDS" />
                  <div className="app__overlayMenu_menu_items">
                    {data.whiteblends.map((whiteblend, index) => (
                      <MenuItem
                        key={whiteblend.title + index}
                        title={whiteblend.title}
                        price={whiteblend.price}
                        tags={whiteblend.tags}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="app__overlayMenu-menu">
                <div className="app__overlayMenu-menu_roses flex__center">
                  <MenuHeader title="ROSÉ WINES" />
                  <div className="app__overlayMenu_menu_items">
                    {data.roses.map((rose, index) => (
                      <MenuItem
                        key={rose.title + index}
                        title={rose.title}
                        price={rose.price}
                        tags={rose.tags}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MdOutlineRestaurantMenu
          fontSize={27}
          className="overlay__close"
          onClick={() => handleClose()}
        />
      </div>
    );
  } else if (title === "spirits-and-liqueurs") {
    return (
      <div className="app__overlay-smallscreen_overlay flex__center slide-bottom">
        <SubHeading title="SPIRITS & LIQUEURS" />
        <MdOutlineRestaurantMenu
          fontSize={27}
          className="overlay__close"
          onClick={() => handleClose()}
        />
      </div>
    );
  } else if (title === "lunch") {
    return (
      <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <SubHeading title="LUNCH" />
      </div>
    );
  }
};

export default Overlay;
