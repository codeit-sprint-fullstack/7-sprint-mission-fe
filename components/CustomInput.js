import InputBox from "./InputBox";
import { checkBlank } from "@/utils/validInput";
import styles from "./CustomInput.module.css";

export default function CustomInput({ object, password }) {
  const { element, checkValid, invalidText } = object;

  const isValid = password ? !checkValid(password) : !checkValid();
  const handleChange = (e) => {
    const value = e.target.value;
    object.setElement(value);
  };

  const inputStyles =
    isValid && !checkBlank(element)
      ? `${styles.input} ${styles.invalid}`
      : styles.input;

  return (
    <div className={styles.customInput}>
      <label className={styles.text}>{object.korText}</label>
      <input
        className={inputStyles}
        placeholder={object.placeholderText}
        value={object.element}
        onChange={handleChange}
      />
      {isValid && !checkBlank(element) && (
        <div className={styles.invalidText}>{invalidText}</div>
      )}
    </div>
  );
}
