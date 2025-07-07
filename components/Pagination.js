// components/Pagination.js
import { PATH } from "@/utils/path";
import Link from "next/link";
import styles from "./Pagination.module.css";

export default function Pagination({ totalCount, currentPage, pageSize }) {
  const totalPages = Math.ceil(totalCount / pageSize);
  const maxVisible = 5;

  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = startPage + maxVisible - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.pagination}>
      <Link href={`${PATH.freeBoard()}?page=${Math.max(1, currentPage - 1)}`}>
        <button className={styles.pageButton} disabled={currentPage === 1}>
          {"<"}
        </button>
      </Link>

      {pages.map((page) => (
        <Link key={page} href={`${PATH.freeBoard()}?page=${page}`}>
          <button
            className={`${styles.pageButton} ${
              page === currentPage ? styles.active : ""
            }`}
          >
            {page}
          </button>
        </Link>
      ))}

      <Link
        href={`${PATH.freeBoard()}?page=${Math.min(
          totalPages,
          currentPage + 1
        )}`}
      >
        <button
          className={styles.pageButton}
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
      </Link>
    </div>
  );
}
