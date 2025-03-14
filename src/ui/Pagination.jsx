import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";

import { PAGE_SIZE } from "../utils/constants";

import PaginationButton from "./PaginationButton";

function Pagination({ count, colCount = 1 }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams?.get("page")) || 1;
  const pageCount = Math.ceil(count / PAGE_SIZE);
  const firstPage = (currentPage - 1) * PAGE_SIZE + 1;
  const lastPage = currentPage * PAGE_SIZE;

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  if (count <= PAGE_SIZE || !count) return null;

  return (
    <tr className="text-sm text-gray-900 dark:text-gray-200">
      <td colSpan={colCount - 2} className="p-4">
        Showing <strong>{firstPage}</strong> to{" "}
        <strong>{currentPage === pageCount ? count : lastPage}</strong> results
        of <strong>{count}</strong>
      </td>

      <td colSpan={2} className="p-4">
        <div className="flex justify-end gap-6">
          <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
            <HiOutlineChevronLeft />
            <span>Previous</span>
          </PaginationButton>

          <PaginationButton
            onClick={nextPage}
            disabled={currentPage === pageCount}
          >
            <span>Next</span>
            <HiOutlineChevronRight />
          </PaginationButton>
        </div>
      </td>
    </tr>
  );
}

export default Pagination;
