"use client";

import * as React from "react";
import Image from "next/image";
import classes from "./header.module.scss";
import { Menu } from "./components/menu";
import { Social } from "./components/social";

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleScroll = () => {
    console.log("scrolled");
    const offset = window.scrollY;
    if (offset > 40) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`${classes.wrapper} ${
        isScrolled ? classes["wrapper--scrolled"] : ""
      }`}
    >
      <div
        className={`${classes.menu_burger} ${
          isOpen ? classes["menu_burger--open"] : ""
        }`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`${classes.container} ${
          isOpen ? classes["container--opened"] : ""
        }`}
      >
        <div className={classes.content}>
          <div className={classes.logo}>
            <div className={classes.logo__img}>
              <Image src="/assets/logo.png" alt="logo" width="77" height="84" />
            </div>
            <div className={classes.logo__text}>Soladdin</div>
          </div>
          <Menu />
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Header;
