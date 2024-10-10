import clsx from "clsx";
import styles from "./index.module.css";

export const Box = ({
  children,
  className,
  Component = "div",
  direction,
  align,
  justify,
  ...props
}) => (
  <Component
    className={clsx([
      styles.box,
      className,
      (direction === "column" && styles.column) ||
        (direction === "columnRevers" && styles.columnRevers),
      align && styles[`align_${align}`],
      justify && styles[`justify_${justify}`],
    ])}
    {...props}
  >
    {children}
  </Component>
);

// Box.displayName = "Box";
