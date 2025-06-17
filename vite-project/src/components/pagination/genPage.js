export const PAGE_NUM = 5;

export const genPageNums = ({ totalCount, pageSize, currentPage }) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const groupIndex = Math.floor((currentPage - 1) / PAGE_NUM);
  const startPage = groupIndex * PAGE_NUM + 1;
  const lastPageInGroup = Math.min(startPage + PAGE_NUM - 1, totalPages);
  const pages = Array.from(
    { length: lastPageInGroup - startPage + 1 },
    (_, index) => startPage + index
  );

  return {
    pages,
    totalPages,
  };
};
