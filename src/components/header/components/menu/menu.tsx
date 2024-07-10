import * as React from "react";
import classes from "./menu.module.scss";

const menuList = [
  {
    id: "menu_about",
    name: "About",
    anchor: "#about",
  },
  {
    id: "menu_roadmap",
    name: "Roadmap",
    anchor: "#roadmap",
  },
  {
    id: "menu_tokenomics",
    name: "Tokenomics",
    anchor: "#tokenomics",
  },
  {
    id: "menu_giveaways",
    name: "Giveaways",
    anchor: "#giveaways",
  },
  {
    id: "menu_charity",
    name: "Charity",
    anchor: "#charity",
  },
  {
    id: "menu_faq",
    name: "FAQ",
    anchor: "#faq",
  },
];

const Menu = () => {
  return (
    <div className={classes.wrapper}>
      {menuList.map((item) => (
        <a key={item.id} href={item.anchor} className={classes.link}>
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default Menu;
