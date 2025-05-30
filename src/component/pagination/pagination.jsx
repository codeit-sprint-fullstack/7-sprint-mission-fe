import "./pagination.css";
const Pagination = ({
  startPage,
  currentPage,
  onPageChange,
  onNext,
  onPrev,
}) => {
  const pageNumber = Array.from({ length: 5 }, (_, i) => startPage + i);
  return (
    <div className="pagination">
      <li onClick={onPrev}>{"<"}</li>
      {pageNumber.map((page) => (
        <li
          key={page}
          onClick={() => onPageChange(page)}
          className={page == currentPage ? "active" : ""}
        >
          {page}
        </li>
      ))}
      <li onClick={onNext}>{">"}</li>
    </div>
  );
};

export default Pagination;
