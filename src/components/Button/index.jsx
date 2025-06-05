import styles from "./Button.module.css";

/**
 * @param {object} props - 컴포넌트 props
 * @param {React.ReactNode} props.children - 버튼 내부에 표시될 내용
 * @param {'large' | 'medium' | 'small' | 'xsmall'} [props.size='medium'] - 버튼 크기
 * @param {'primary100' | 'primary200' | 'primary300' | 'coolGray50'} [props.color='primary100'] - 버튼 색상
 */

export const Button = ({ children, size = "medium", color = "primary100" }) => {
  const sizeClass = styles[size];
  const colorClass = styles[color];

  return (
    <button className={`${styles.btn} ${sizeClass} ${colorClass}`}>
      {children}
    </button>
  );
};
