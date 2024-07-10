import * as React from "react";
import Image from "next/image";
import classes from "./welcome.module.scss";
import { Header } from "src/components/header";
import { Button } from "src/shared/button";
import { AnimatedLine } from "src/shared/animated-line";
import Parallax from "./components/parallax/parallax";

const Welcome = () => {
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <section className={classes.wrapper}>
          <div className={classes.container}>
            <Parallax />
            <div className={classes.content}>
              <h1 className={classes.title}>Soladdin</h1>
              <div className={classes.gif}>
                <Image src="/assets/Alladin.gif" fill alt="alladin" />
              </div>
              <div className={classes.actions}>
                <div className={classes.actions__button}>
                  <Button>Buy Now</Button>
                </div>
                <div className={classes.actions__button}>
                  <Button type="Transparent">Chart</Button>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.strips}>
            <AnimatedLine />
          </div>
        </section>
        <section
          className={`${classes.wrapper} ${classes["wrapper--second"]}`}
        ></section>
      </div>
    </>
  );
};

export default Welcome;
