import clsx from "clsx";
import { AText } from "../AText";
import { Box } from "../Box";
import styles from "./index.module.css";

export const Input = ({
  className = "",
  hint = "",
  type = "text",
  afterInputLabel = "",
  label = "",
  register = () => {},
  watch = () => {},
  name = "",
  formState = {},
  ...props
}) => {
  const { errors = {}, isDirty } = formState;
  const isError = Boolean(errors[name]);
  const value = watch(name);

  const isCheckbox = type === "checkbox";
  return (
    <Box className={clsx(styles.wrapper, isDirty && styles.dirty)}>
      <input
        id={name}
        className={clsx([
          styles.input,
          isCheckbox ? styles.checkbox : styles.text_input,
          isError && styles.error,
          value && styles.focus,
          className,
        ])}
        type={type}
        {...props}
        {...register(name, { required: !isCheckbox })}
      />
      {label && (
        <AText
          className={styles.label}
          Component="label"
          variant="body_18"
          htmlFor={name}
        >
          {label}
        </AText>
      )}
      {!isCheckbox && <Box className={styles.input_status_icon} />}
      {hint && isError && (
        <AText className={styles.hint} variant="body_12">
          {hint}
        </AText>
      )}
      {afterInputLabel && (
        <AText Component="label" variant="body_16">
          {afterInputLabel}
        </AText>
      )}
    </Box>
  );
};
