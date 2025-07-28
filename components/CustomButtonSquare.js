import styles from "./CustomButtonSquare.module.css";

export default function CustomButtonSquare({
  text,
  onClick,
  valid = false,
  type = "normal",
}) {
  const handleButtonClick = (e) => {
    e.preventDefault();
    if (valid) {
      onClick();
    }
  };

  const stylesOption = valid ? "" : styles.invalid;
  const stylesLength = type === "normal" ? styles.button : styles.longButton;

  return (
    <button
      className={`${stylesLength} ${stylesOption}`}
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
}
