import * as React from "react";
import classes from "./button.module.scss";

type OwnProps = {
  children: React.ReactNode;
  type?: "Transparent" | "Filled";
  className?: string;
};

const Button: React.FC<OwnProps> = ({
  children,
  type = "Filled",
  className,
}) => {
  const buttonClass = type === "Filled" ? "" : classes["button--transparent"];

  return (
    <button className={`${classes.button} ${buttonClass}`}>{children}</button>
  );
};

export default React.memo(Button);
