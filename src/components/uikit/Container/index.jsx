import styles from "./index.module.css";

export const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);
