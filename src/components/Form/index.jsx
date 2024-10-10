import { isDesktop, isMobileOnly, isTablet } from "react-device-detect";
import { AText, Box, Button, Container, Input } from "../uikit";
import styles from "./index.module.css";
import { useForm } from "react-hook-form";

export const Form = () => {
  const { handleSubmit, register, formState, watch } = useForm({
    mode: "onBlur",
  });
  const { isValid } = formState;
  const onSubmit = async (data) =>
    await fetch("www.test.url", { method: "POST", body: JSON.stringify(data) });

  return (
    <Box Component="footer" className={styles.section}>
      <Container>
        <Box className={styles.wrapper} direction="column" align="center">
          <AText
            variant={
              (isDesktop | isTablet && "headline_2") ||
              (isMobileOnly && "headline_4")
            }
          >
            Отправь форму
          </AText>
          <Box
            Component="form"
            onSubmit={handleSubmit(onSubmit)}
            id="form"
            className={styles.form_wrapper}
            direction="column"
          >
            <Box
              className={styles.inputs_wrapper}
              variant="body_18"
              direction={isMobileOnly ? "column" : "row"}
            >
              <Input
                name="name"
                label="Имя"
                hint="helperText"
                register={register}
                formState={formState}
                watch={watch}
              />
              <Input
                type="tel"
                name="phone"
                label="Телефон"
                hint="helperText"
                register={register}
                formState={formState}
                watch={watch}
              />
            </Box>
            <Box
              className={styles.inputs_wrapper}
              direction={isMobileOnly ? "column" : "row"}
            >
              <Input
                name="agreement"
                type="checkbox"
                afterInputLabel="Согласен, отказываюсь"
                register={register}
              />
              <Box className={styles.btn_wrapper}>
                <Button
                  disabled={!isValid}
                  className={styles.btnForm}
                  type="submit"
                >
                  Отправить
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
