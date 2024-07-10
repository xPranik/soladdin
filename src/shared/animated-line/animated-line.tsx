import * as React from "react";
import classes from "./animated-line.module.scss";

const AnimatedLine = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.strip}>
        <div className={classes.text_container}>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
        </div>
        <div
          className={`${classes.text_container} ${classes["text_container--second"]}`}
        >
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
        </div>
      </div>
      <div className={`${classes.strip} ${classes["strip--mirrored"]}`}>
        <div
          className={`${classes.text_container} ${classes["text_container--mirrored"]}`}
        >
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
        </div>
        <div
          className={`${classes.text_container} ${classes["text_container--second"]} ${classes["text_container--second-mirrored"]}`}
        >
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
          <span>Soladdin</span>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AnimatedLine);
