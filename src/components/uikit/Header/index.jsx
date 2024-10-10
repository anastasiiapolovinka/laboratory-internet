"use client";
import { Box } from "../Box";
import { AText } from "../AText";
import styles from "./index.module.css";
import { useState } from "react";
import clsx from "clsx";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Box className={styles.wrapper}>
      <Box
        className={styles.header}
        Component="nav"
        align="center"
        justify="between"
      >
        <AText className={styles.logo} Component="a" href="/">
          {menuOpen ? (
            <img src="./src/images/logo_burger.png" alt="logo" />
          ) : (
            <img src="./src/images/logo.png" alt="logo" />
          )}
        </AText>
        <Box Component="ul" className={styles.nav} variant="body_16">
          <Box Component="li">
            <AText Component="a" href="#how_work">
              Как это работает
            </AText>
          </Box>
          <Box Component="li">
            <AText Component="a" href="#third_block">
              3-й блок
            </AText>
          </Box>
          <Box Component="li">
            <AText Component="a" href="#questions">
              Вопросы и ответы
            </AText>
          </Box>
          <Box Component="li">
            <AText Component="a" href="#form">
              Форма
            </AText>
          </Box>
        </Box>
      </Box>
      <Box className={styles.burgerWrapper} onClick={toggleMenu}>
        {menuOpen ? (
          <img
            src="./src/images/close.png"
            alt="Close Menu"
            className={styles.close_icon}
          />
        ) : (
          <img
            src="./src/images/burger.png"
            alt="Open Menu"
            className={styles.burger}
          />
        )}
      </Box>
      <Box
        Component="nav"
        align="center"
        className={clsx([styles.mobileMenu, menuOpen && styles.menuOpen])}
      >
        <Box Component="ul" direction="column" className={styles.nav_items}>
          <Box Component="li">
            <AText
              className={styles.nav_item}
              Component="a"
              href="/"
              variant="body_18"
            >
              Как это работает
            </AText>
          </Box>
          <Box Component="li">
            <AText
              className={styles.nav_item}
              Component="a"
              href="/"
              variant="body_18"
            >
              3-й блок
            </AText>
          </Box>
          <Box Component="li">
            <AText
              className={styles.nav_item}
              Component="a"
              href="/"
              variant="body_18"
            >
              Вопросы и ответы
            </AText>
          </Box>
          <Box Component="li">
            <AText
              className={styles.nav_item}
              Component="a"
              href="/"
              variant="body_18"
            >
              Форма
            </AText>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
