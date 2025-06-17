import "./button.css";
import { clsx } from "clsx";

export const MyButton = ({ children, className }) => {
  const classes = clsx("mybutton", className);

  return <button className={classes}>{children}</button>;
};
