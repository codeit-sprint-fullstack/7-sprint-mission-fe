import styles from "./CustomButtonSquare.module.css";

export default function CustomButtonSquare({ text, onClick, valid = false }) {
  const handleButtonClick = (e) => {
    e.preventDefault();
    if (valid) {
      onClick();
    }
  };

  const stylesOption = valid ? "" : styles.invalid;

  return (
    <button
      className={`${styles.button} ${stylesOption}`}
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
}
