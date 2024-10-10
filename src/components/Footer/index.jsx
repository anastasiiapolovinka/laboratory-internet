import { AText, Box } from "../uikit";
import styles from "./index.module.css";

export const Footer = () => {
  return (
    <Box Component="footer" className={styles.section} justify="center">
      <AText variant="body_18"> © 2021 Лаборатория интернет</AText>
    </Box>
  );
};
