import { PagenationButton } from "../PagenationButton";
import styles from "./Pagenation.module.css";

export const Pagenation = ({ currentPage, totalPages, onPageChange }) => {
  // 조건1: 전체페이지의 수가 1이면 빈 배열을 리턴한다.
  if (totalPages <= 1) {
    return null;
  }

  const getPageNumbers = () => {
    const numAry = [];
    const numbutton = 5; // 중앙에 표시할 버튼의 개수
    const offset = 2; // 현재 페이지가 중앙에 배치될때 페이지를 계산하기 위한 offset

    if (totalPages <= numbutton) {
      // 전체 페이지 수가 5개 이하이면, 1부터 totalPages까지만 버튼 생성
      for (let i = 1; i <= totalPages; i++) {
        numAry.push(i);
      }
    } else if (currentPage <= 2) {
      // 전체 페이지가 5개 초과 & 현재 페이지가 1 또는 2인 경우: 1, 2, 3, 4, 5 표시
      for (let i = 1; i <= numbutton; i++) {
        numAry.push(i);
      }
    } else if (currentPage >= totalPages - 1) {
      // 전체 페이지가 5개 초과 & 현재 페이지가 마지막 또는 마지막에서 한 칸 앞인 경우: 마지막 5개 페이지 표시
      for (let i = totalPages - numbutton + 1; i <= totalPages; i++) {
        numAry.push(i);
      }
    } else {
      for (let i = currentPage - offset; i <= currentPage + offset; i++) {
        numAry.push(i);
      }
    }
    console.log(currentPage, offset, totalPages);
    return numAry;
  };

  const handlePageClick = (targetPage) => {
    if (
      targetPage >= 1 &&
      targetPage <= totalPages &&
      targetPage !== currentPage
    ) {
      return onPageChange(targetPage);
    }
  };

  const visiblePageNumbers = getPageNumbers();
  console.log(visiblePageNumbers);

  return (
    <div className={styles.pagenation}>
      <PagenationButton
        children="<"
        onClick={() => {
          handlePageClick(currentPage - 1);
        }}
        disabled={currentPage === 1}
      />
      {visiblePageNumbers.map((number) => {
        return (
          <PagenationButton
            children={number}
            key={number}
            onClick={() => {
              handlePageClick(number);
            }}
            disabled={currentPage === number}
            isActive={currentPage === number}
          />
        );
      })}
      <PagenationButton
        children=">"
        onClick={() => {
          handlePageClick(currentPage + 1);
        }}
        disabled={currentPage === totalPages}
      />
    </div>
  );
};
