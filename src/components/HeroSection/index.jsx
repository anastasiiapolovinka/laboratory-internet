import { AText, Box, Button, Container, Header } from "../uikit";
import styles from "./index.module.css";
import { isDesktop, isTablet, isMobileOnly } from "react-device-detect";

export const HeroSection = () => {
  return (
    <Box className={styles.section}>
      <Container>
        <Header />
        <Box align="center" justify="center" className={styles.wrapper}>
          <Box direction="column" align="center" className={styles.content}>
            <Box direction="column" className={styles.info}>
              <AText
                Component="h1"
                variant={
                  (isDesktop && "headline_1") ||
                  (isTablet && "headline_3") ||
                  (isMobileOnly && "headline_4")
                }
              >
                Говорят, никогда не поздно сменить профессию
              </AText>
              <AText
                Component="span"
                variant={isDesktop ? "body_18" : "body_16"}
              >
                Сделай круто тестовое задание и у тебя получится
              </AText>
            </Box>
            <Button className={styles.hero_btn}>Проще простого</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
