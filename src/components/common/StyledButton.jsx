/* eslint-disable react/prop-types */
import styles from "./StyledButton.module.css";

const StyledButton = ({ text, extraChild, size }) => {
  const btnSize = size === "large" ? styles.btnLarge : styles.btnDefault;
  const textSize = size === "large" ? styles.textLarge : styles.textDefault;
  return (
    <button className={[styles.btn, btnSize].join(" ")}>
      <p className={[styles.text, textSize].join(" ")}>{text}</p>
      {extraChild ? extraChild : null}
    </button>
  );
};

export default StyledButton;
