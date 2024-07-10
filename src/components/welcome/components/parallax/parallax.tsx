"use client";
import * as React from "react";
import classes from "./parallax.module.scss";

type OwnProps = {};

const Parallax: React.FC<OwnProps> = () => {
  const [offsetY, setOffsetY] = React.useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={classes.parallax_wrapper}>
      <div
        className={classes.layout_1}
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      />
      <div
        className={classes.layout_2}
        style={{ transform: `translateY(${offsetY * 0.15}px)` }}
      />
      <div
        className={classes.layout_3}
        style={{ transform: `translateY(${offsetY * 0.25}px)` }}
      />
      <div
        className={classes.layout_4}
        style={{ transform: `translateY(${offsetY * 0.13}px)` }}
      />
      <div
        className={classes.layout_5}
        style={{ transform: `translateY(${offsetY * 0.17}px)` }}
      />
      <div
        className={classes.layout_6}
        style={{ transform: `translateY(${offsetY * 0.18}px)` }}
      />
      <div
        className={classes.layout_7}
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      />
      <div
        className={classes.layout_8}
        style={{ transform: `translateY(${offsetY * 0.15}px)` }}
      />
      <div
        className={classes.layout_9}
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      />
      <div
        className={classes.layout_10}
        style={{ transform: `translateY(${offsetY * 0.12}px)` }}
      />
      <div
        className={classes.layout_11}
        style={{ transform: `translateY(${offsetY * 0.14}px)` }}
      />
    </div>
  );
};

export default React.memo(Parallax);
