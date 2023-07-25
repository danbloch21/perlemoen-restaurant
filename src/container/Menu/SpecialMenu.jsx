import React, { useState } from "react";
import { SubHeading, MenuItem } from "../../components";
import MenuButtons from "../../components/MenuButtons/MenuButtons";
import { images, data } from "../../constants";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import MenuHeader from "../../components/MenuHeader/MenuHeader";
import CategoryHeader from "../../components/CategoryHeader/CategoryHeader";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="MENU" />
      <h1
        className="headtext__poiret"
        style={{ letterSpacing: "0.09em", lineHeight: "40px" }}
        id="menu"
      >
        COME DINE WITH US
      </h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_lunchstarters flex__center">
        <div
          className="app__specialMenu-menu_heading"
          style={{ letterSpacing: "0.1em" }}
        >
          <CategoryHeader title="STARTERS" />
        </div>
        <div className="app__specialMenu_menu_items">
          {data.lunchstarters.map((lunchstarter, index) => (
            <MenuItem
              key={lunchstarter.title + index}
              title={lunchstarter.title}
              price={lunchstarter.price}
              tags={lunchstarter.tags}
            />
          ))}
        </div>
        <p className="app__p-opensans">
          If you have any special dietary requirements, please notify your
          waiter and the kitchen can advise on options. Vegan and vegetarian
          options available
        </p>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.SquidTubes} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_lunchmains flex__center">
        <div
          className="app__specialMenu-menu_heading"
          style={{ letterSpacing: "0.1em" }}
        >
          <CategoryHeader title="MAIN COURSES" />
        </div>
        <div className="app__specialMenu_menu_items">
          {data.lunchmains.map((lunchmain, index) => (
            <MenuItem
              key={lunchmain.title + index}
              title={lunchmain.title}
              price={lunchmain.price}
              tags={lunchmain.tags}
            />
          ))}
        </div>
        <div className="app__specialMenu-menu_lunchdesserts flex__center">
          <div
            className="app__specialMenu-menu_heading"
            style={{ letterSpacing: "0.1em" }}
          >
            <CategoryHeader title="DESSERTS" />
          </div>
          <div className="app__specialMenu_menu_items">
            {data.lunchdesserts.map((lunchdessert, index) => (
              <MenuItem
                key={lunchdessert.title + index}
                title={lunchdessert.title}
                price={lunchdessert.price}
                tags={lunchdessert.tags}
              />
            ))}
          </div>
          <div>
            <p className="app__p-opensans">
              See our blackboard for daily specials
            </p>
          </div>
          <div>
            <p className="app__p-opensans">
              Please note: a service fee of 10% will be charged on tables of six
              or more
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="app__specialmenu-buttons">
      <MenuButtons />
    </div>
  </div>
);

export default SpecialMenu;
