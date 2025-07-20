// src/components/common/Button.js
import Link from "next/link";
import styles from "./Button.module.css";

/**
 * @param {object} props - 컴포넌트 props
 * @param {React.ReactNode} props.children - 버튼 내부에 표시될 내용
 * @param {() => void} [props.onClick] - 버튼 클릭 시 실행될 함수
 * @param {string} [props.href] - 링크로 사용할 경우의 URL
 * @param {'large' | 'medium' | 'small'} [props.size='medium'] - 버튼 크기
 * @param {'primary100' | 'primary200' | 'primary300' | 'coolGray50'} [props.color='primary100'] - 버튼 색상
 */
export default function Button({
  children,
  onClick,
  href,
  size = "medium",
  color = "primary100",
}) {
  const sizeClass = styles[size];
  const colorClass = styles[color];
  const className = `${styles.btn} ${sizeClass} ${colorClass}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
