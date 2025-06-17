import "./pagination.css";
import Arrow from "/arrow_right.svg";
import { PageLabel } from "./pageLabel";
import { genPageNums } from "./genPage";
import { useSalesProductContext } from "../../context/salesProductContext";

export const Pagiation = () => {
  const {
    items: { totalCount },
    productFetchQuery: { pageSize, page: currentPage },
    setProductFetchQuery,
  } = useSalesProductContext();

  const { pages, totalPages } = genPageNums({
    currentPage,
    pageSize,
    totalCount,
  });

  const handlePageClick = (page) => {
    setProductFetchQuery((prev) => ({
      ...prev,
      page,
    }));
  };

  const handlePrevArrowClick = () => {
    setProductFetchQuery((prev) => ({
      ...prev,
      page: prev.page - 1,
    }));
  };

  const handleNextArrowClick = () => {
    setProductFetchQuery((prev) => ({
      ...prev,
      page: prev.page + 1,
    }));
  };

  return (
    <ul className="pagination">
      <li>
        <PageLabel
          handlePageClick={handlePrevArrowClick}
          disabled={currentPage === 1}
        >
          <img
            className="page-label__icon--left"
            src={Arrow}
            alt="페이지 화살표"
          />
        </PageLabel>
      </li>
      {pages.map((page) => {
        const handleClickPageLabel = () => handlePageClick(page);
        return (
          <li key={page}>
            <PageLabel
              handlePageClick={handleClickPageLabel}
              isActive={currentPage === page}
            >
              {page}
            </PageLabel>
          </li>
        );
      })}

      <li>
        <PageLabel
          handlePageClick={handleNextArrowClick}
          disabled={currentPage === totalPages}
        >
          <img
            className="page-label__icon--right"
            src={Arrow}
            alt="페이지 화살표"
          />
        </PageLabel>
      </li>
    </ul>
  );
};
