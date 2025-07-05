// components/Pagination.js
import { PATH } from "@/utils/path";
import Link from "next/link";
// import styles from "./Pagination.module.css";

export default function Pagination({ totalCount, currentPage, pageSize }) {
  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div>
      {Array.from({ length: totalPages }, (_, idx) => {
        const page = idx + 1;
        return (
          <Link key={page} href={`${PATH.freeBoard()}?page=${page}`}>
            <button disabled={page == currentPage}>{page}</button>
          </Link>
        );
      })}
    </div>
  );
}
