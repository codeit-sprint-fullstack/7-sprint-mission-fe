import styles from "./keywordNoResult.module.css";

const KeywordNoResult = ({ keyword }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.message}>
        <span className={styles.keyword}>{keyword}</span> 의 검색결과가 존재하지
        않습니다.
      </p>
    </div>
  );
};

export default KeywordNoResult;
