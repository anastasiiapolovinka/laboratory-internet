"use client";
import clsx from "clsx";
import styles from "./index.module.css";

export const Button = ({
  type = "button",
  className,
  handleClick = () => {},
  isFullWidth,
  children,
  ...props
}) => {
  const btnClassName = clsx([
    styles.btn,
    isFullWidth && styles.full_w,
    className,
  ]);
  return (
    <button
      onClick={handleClick}
      className={btnClassName}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
