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
  if (title === "whites-and-bubbly") {
    return (
      <div className="app__overlay-smallscreen_overlay flex__center slide-bottom">
        <SubHeading title="DRINKS" />
        <div className="app__overlayMenu-title">
          <MenuHeader title="WHITES & BUBBLY" />
        </div>
        <div className="app__overlayMenu-menu">
          <div className="app__overlayMenu-left">
            <div className="app__overlayMenu-menu_champagnes flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="SPARKLING WINE" />
              </div>
              <div className="app__overlayMenu_menu_items">
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
            <div className="app__overlayMenu-menu_chardonnays flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="CHARDONNAY" />
              </div>
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
            <div className="app__overlayMenu-menu_chenins flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="CHENIN BLANC" />
              </div>
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

          <div className="app__overlayMenu-right">
            <div className="app__overlayMenu-menu_sauvignons flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="SAUVIGNON BLANC" />
              </div>
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
            <div className="app__overlayMenu-menu_viogniers flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="VIOGNIER" />
              </div>
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
            <div className="app__overlayMenu-menu_whiteblends flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="BLEND" />
              </div>
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
          <MdOutlineRestaurantMenu
            fontSize={27}
            className="overlay__close"
            onClick={() => handleClose()}
          />
        </div>
      </div>
    );
  } else if (title === "reds-and-rose") {
    return (
      <div className="app__overlay-smallscreen_overlay flex__center slide-bottom">
        <SubHeading title="DRINKS" />
        <div className="app__overlayMenu-title">
          <MenuHeader title="REDS & ROSÉ" />
        </div>
        <div className="app__overlayMenu-menu">
          <div className="app__overlayMenu-left">
            <div className="app__overlayMenu-menu_pinots flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="PINOT NOIR" />
              </div>
              <div className="app__overlayMenu_menu_items">
                {data.pinots.map((pinot, index) => (
                  <MenuItem
                    key={pinot.title + index}
                    title={pinot.title}
                    price={pinot.price}
                    tags={pinot.tags}
                  />
                ))}
              </div>
            </div>
            <div className="app__overlayMenu-menu_shirazes flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="SHIRAZ" />
              </div>
              <div className="app__overlayMenu_menu_items">
                {data.shirazes.map((shiraz, index) => (
                  <MenuItem
                    key={shiraz.title + index}
                    title={shiraz.title}
                    price={shiraz.price}
                    tags={shiraz.tags}
                  />
                ))}
              </div>
            </div>
            <div className="app__overlayMenu-menu_pinotages flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="PINOTAGE" />
              </div>
              <div className="app__overlayMenu_menu_items">
                {data.pinotages.map((pinotage, index) => (
                  <MenuItem
                    key={pinotage.title + index}
                    title={pinotage.title}
                    price={pinotage.price}
                    tags={pinotage.tags}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="app__overlayMenu-right">
            <div className="app__overlayMenu-menu_redblends flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="BLEND" />
              </div>
              <div className="app__overlayMenu_menu_items">
                {data.redblends.map((redblend, index) => (
                  <MenuItem
                    key={redblend.title + index}
                    title={redblend.title}
                    price={redblend.price}
                    tags={redblend.tags}
                  />
                ))}
              </div>
            </div>
            <div className="app__overlayMenu-menu_dessertwines flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="DESSERT WINE" />
              </div>
              <div className="app__overlayMenu_menu_items">
                {data.dessertwines.map((dessertwine, index) => (
                  <MenuItem
                    key={dessertwine.title + index}
                    title={dessertwine.title}
                    price={dessertwine.price}
                    tags={dessertwine.tags}
                  />
                ))}
              </div>
            </div>
            <div className="app__overlayMenu-menu_roses flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="ROSÉ" />
              </div>
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
        <SubHeading title="DRINKS" />
        <div className="app__overlayMenu-title">
          <MenuHeader title="SPIRITS & LIQUEURS" />
        </div>
        <div className="app__overlayMenu-menu">
          <div className="app__overlayMenu-left">
            <div className="app__overlayMenu-menu_gins flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="GIN" />
              </div>
              <div className="app__overlayMenu_menu_items">
                {data.gins.map((gin, index) => (
                  <MenuItem
                    key={gin.title + index}
                    title={gin.title}
                    price={gin.price}
                    tags={gin.tags}
                  />
                ))}
              </div>
            </div>
            <div className="app__overlayMenu-menu_vodkas flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="VODKA" />
              </div>
              <div className="app__overlayMenu_menu_items">
                {data.vodkas.map((vodka, index) => (
                  <MenuItem
                    key={vodka.title + index}
                    title={vodka.title}
                    price={vodka.price}
                    tags={vodka.tags}
                  />
                ))}
              </div>
            </div>
            <div className="app__overlayMenu-menu_whiskeys flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="WHISKEY" />
              </div>
              <div className="app__overlayMenu_menu_items">
                {data.whiskeys.map((whiskey, index) => (
                  <MenuItem
                    key={whiskey.title + index}
                    title={whiskey.title}
                    price={whiskey.price}
                    tags={whiskey.tags}
                  />
                ))}
              </div>
            </div>
            <div className="app__overlayMenu-menu_brandies flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="BRANDY" />
              </div>
              <div className="app__overlayMenu_menu_items">
                {data.brandies.map((brandy, index) => (
                  <MenuItem
                    key={brandy.title + index}
                    title={brandy.title}
                    price={brandy.price}
                    tags={brandy.tags}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="app__overlayMenu-right">
            <div className="app__overlayMenu-menu_rums flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="RUM" />
              </div>
              <div className="app__overlayMenu_menu_items">
                {data.rums.map((rum, index) => (
                  <MenuItem
                    key={rum.title + index}
                    title={rum.title}
                    price={rum.price}
                    tags={rum.tags}
                  />
                ))}
              </div>
            </div>
            <div className="app__overlayMenu-menu_tequilas flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="TEQUILA" />
              </div>
              <div className="app__overlayMenu_menu_items">
                {data.tequilas.map((tequila, index) => (
                  <MenuItem
                    key={tequila.title + index}
                    title={tequila.title}
                    price={tequila.price}
                    tags={tequila.tags}
                  />
                ))}
              </div>
            </div>
            <div className="app__overlayMenu-menu_vermouths flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="VERMOUTH" />
              </div>
              <div className="app__overlayMenu_menu_items">
                {data.vermouths.map((vermouth, index) => (
                  <MenuItem
                    key={vermouth.title + index}
                    title={vermouth.title}
                    price={vermouth.price}
                    tags={vermouth.tags}
                  />
                ))}
              </div>
            </div>
            <div className="app__overlayMenu-menu_liqueurs flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="LIQUEUR" />
              </div>
              <div className="app__overlayMenu_menu_items">
                {data.liqueurs.map((liqueur, index) => (
                  <MenuItem
                    key={liqueur.title + index}
                    title={liqueur.title}
                    price={liqueur.price}
                    tags={liqueur.tags}
                  />
                ))}
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
  } else if (title === "softdrinks-and-beverages") {
    return (
      <div className="app__overlay-smallscreen_overlay flex__center slide-bottom">
        <SubHeading title="DRINKS" />
        <div className="app__overlayMenu-title">
          <MenuHeader title="HOT & COLD BEVERAGES" />
        </div>
        <div className="app__overlayMenu-menu">
          <div className="app__overlayMenu-left">
            <div className="app__overlayMenu-menu_beverages flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="TEA & COFFEE" />
              </div>
              <div className="app__overlayMenu_menu_items">
                {data.beverages.map((beverage, index) => (
                  <MenuItem
                    key={beverage.title + index}
                    title={beverage.title}
                    price={beverage.price}
                    tags={beverage.tags}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="app__overlayMenu-right">
            <div className="app__overlayMenu-menu_softs flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="SOFT DRINKS" />
              </div>
              <div className="app__overlayMenu_menu_items">
                {data.softs.map((soft, index) => (
                  <MenuItem
                    key={soft.title + index}
                    title={soft.title}
                    price={soft.price}
                    tags={soft.tags}
                  />
                ))}
              </div>
            </div>
          </div>
          <MdOutlineRestaurantMenu
            fontSize={27}
            className="overlay__close"
            onClick={() => handleClose()}
          />
        </div>
      </div>
    );
  } else if (title === "lunch") {
    return (
      <div className="app__overlay-smallscreen_overlay flex__center slide-bottom">
        <SubHeading title="MEALS" />
        <div className="app__overlayMenu-title">
          <MenuHeader title="LUNCH" />
        </div>
        <div className="app__overlayMenu-menu">
          <div className="app__overlayMenu-left">
            <div className="app__overlayMenu-menu_lunchstarters flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="STARTERS" />
              </div>
              <div className="app__overlayMenu_menu_items">
                {data.lunchstarters.map((lunchstarter, index) => (
                  <MenuItem
                    key={lunchstarter.title + index}
                    title={lunchstarter.title}
                    price={lunchstarter.price}
                    tags={lunchstarter.tags}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="app__overlayMenu-right">
            <div className="app__overlayMenu-menu_lunchmains flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="MAIN COURSES" />
              </div>
              <div className="app__overlayMenu_menu_items">
                {data.lunchmains.map((lunchmain, index) => (
                  <MenuItem
                    key={lunchmain.title + index}
                    title={lunchmain.title}
                    price={lunchmain.price}
                    tags={lunchmain.tags}
                  />
                ))}
              </div>
              <div className="app__overlayMenu-menu_lunchdesserts flex__center">
                <div className="app__overlayMenu-menu_heading">
                  <CategoryHeader title="DESSERTS" />
                </div>
                <div className="app__overlayMenu_menu_items">
                  {data.lunchdesserts.map((lunchdessert, index) => (
                    <MenuItem
                      key={lunchdessert.title + index}
                      title={lunchdessert.title}
                      price={lunchdessert.price}
                      tags={lunchdessert.tags}
                    />
                  ))}
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
      </div>
    );
  } else if (title === "dinner") {
    return (
      <div className="app__overlay-smallscreen_overlay flex__center slide-bottom">
        <SubHeading title="MEALS" />
        <div className="app__overlayMenu-title">
          <MenuHeader title="DINNER" />
        </div>
        <div className="app__overlayMenu-menu">
          <div className="app__overlayMenu-left">
            <div className="app__overlayMenu-menu_dinnerstarters flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="STARTERS" />
              </div>
              <div className="app__overlayMenu_menu_items">
                {data.dinnerstarters.map((dinnerstarter, index) => (
                  <MenuItem
                    key={dinnerstarter.title + index}
                    title={dinnerstarter.title}
                    price={dinnerstarter.price}
                    tags={dinnerstarter.tags}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="app__overlayMenu-right">
            <div className="app__overlayMenu-menu_dinnermains flex__center">
              <div className="app__overlayMenu-menu_heading">
                <CategoryHeader title="MAIN COURSES" />
              </div>
              <div className="app__overlayMenu_menu_items">
                {data.dinnermains.map((dinnermain, index) => (
                  <MenuItem
                    key={dinnermain.title + index}
                    title={dinnermain.title}
                    price={dinnermain.price}
                    tags={dinnermain.tags}
                  />
                ))}
              </div>
              <div className="app__overlayMenu-menu_dinnerdesserts flex__center">
                <div className="app__overlayMenu-menu_heading">
                  <CategoryHeader title="DESSERTS" />
                </div>
                <div className="app__overlayMenu_menu_items">
                  {data.dinnerdesserts.map((dinnerdessert, index) => (
                    <MenuItem
                      key={dinnerdessert.title + index}
                      title={dinnerdessert.title}
                      price={dinnerdessert.price}
                      tags={dinnerdessert.tags}
                    />
                  ))}
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
      </div>
    );
  }
};

export default Overlay;
