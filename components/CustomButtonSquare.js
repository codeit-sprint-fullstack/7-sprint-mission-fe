import styles from "./CustomButtonSquare.module.css";

export default function CustomButtonSquare({ text, onClick }) {
  const handleButtonClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button className={styles.button} onClick={handleButtonClick}>
      {text}
    </button>
  );
}
