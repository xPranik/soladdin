import * as React from "react";
import classes from "./social.module.scss";
import { TelegramIcon, XIcon } from "src/shared/icons";

const Social = () => {
  return (
    <div className={classes.wrapper}>
      <a href="#" className={`${classes.social} ${classes["social--twitter"]}`}>
        <div className={classes.social__icon}>
          <XIcon />
        </div>
      </a>
      <a href="#" className={classes.social}>
        <div className={classes.social__icon}>
          <TelegramIcon />
        </div>
      </a>
    </div>
  );
};

export default Social;
