import { useState } from "react";
import { AText } from "../AText";
import { Box } from "../Box";
import styles from "./index.module.css";
import { isMobileOnly } from "react-device-detect";

export const AccordionItem = ({ header, body }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleMenu = () => {
    setAccordionOpen(!accordionOpen);
  };
  return (
    <Box className={styles.accordion_item} direction="column">
      <AText
        Component="div"
        className={styles.header}
        variant="body_18_bold"
        onClick={toggleMenu}
      >
        {header}
      </AText>
      {accordionOpen && (
        <AText
          className={styles.info}
          Component="p"
          variant={isMobileOnly ? "body_16" : "body_18"}
        >
          {body}
        </AText>
      )}
    </Box>
  );
};
