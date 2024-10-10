import { Box } from "../Box";
import { AccordionItem } from "./AccordionItem";
import styles from "./index.module.css";

export const Accordion = ({ data }) => {
  return (
    <Box className={styles.accordion_wrapper} direction="column">
      {data.map(({ header, body }) => (
        <AccordionItem key={header} header={header} body={body} />
      ))}
    </Box>
  );
};
