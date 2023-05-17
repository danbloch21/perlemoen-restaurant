import React, { useState } from "react";
import { SubHeading, MenuItem } from "../../components";
import { images } from "../../constants";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { data } from "../../constants";
import MenuHeader from "../../components/MenuHeader/MenuHeader";
import CategoryHeader from "../../components/CategoryHeader/CategoryHeader";

import "./Header.css";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper-info">
        <SubHeading title="SENSATIONAL SUSTAINABLE SEAFOOD" />
        <h1 className="app__header-h1" style={{ letterSpacing: "0.07em" }}>
          Taste The Ocean
        </h1>
        <p className="app__p-opensans">
          Take a stroll down to Hermanus's Old Harbour, a place steeped in
          history, and drink in the famous “champagne air” while savouring the
          spectacular views of Walker Bay. There is no better spot to sample our
          local delicacy perlemoen, paired with one of our renowned wines from
          the Hemel En Aarde Valley as you experience the sights, sounds and
          scent of the sea. Wherever in the world you are from, we are delighted
          to welcome you to our table.
        </p>
        <button type="button" className="custom__button">
          <a href="#menu">EXPLORE MENU</a>{" "}
        </button>
        {toggleMenu ? (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <div className="app__overlay-smallscreen_overlay flex__center slide-bottom">
              <SubHeading title="MEALS" />
              <div className="app__overlayMenu-title">
                <MenuHeader title="MENU" />
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
                  onClick={() => setToggleMenu(false)}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="app__wrapper-img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  );
};

export default Header;
