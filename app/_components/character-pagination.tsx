"use client";

import usePagination from "../_hooks/usePagination";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

const MAX_PAGES_TO_SHOW = 3;

interface CharacterPaginationProps {
  totalPages: number;
}

const CharacterPagination = ({ totalPages }: CharacterPaginationProps) => {
  const { currentPage, navigateTo } = usePagination();

  const handleChangePage = (newPage: number) => () => {
    navigateTo(newPage);
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= MAX_PAGES_TO_SHOW) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let start = Math.max(1, currentPage - 1);
      const end = Math.min(totalPages, start + MAX_PAGES_TO_SHOW - 1);

      if (end - start + 1 < MAX_PAGES_TO_SHOW) {
        start = Math.max(1, end - MAX_PAGES_TO_SHOW + 1);
      }

      if (start > 1) {
        pageNumbers.push(1);
        if (start > 2) {
          pageNumbers.push("ellipsis");
        }
      }

      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }

      if (end < totalPages) {
        if (end < totalPages - 1) {
          pageNumbers.push("ellipsis");
        }
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <Pagination className="pb-6 pt-6">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="cursor-pointer aria-disabled:cursor-not-allowed"
            onClick={handleChangePage(currentPage - 1)}
            aria-disabled={currentPage === 1}
            tabIndex={currentPage === 1 ? -1 : 0}
          />
        </PaginationItem>
        {pageNumbers.map((pageNumber, idx) => (
          <PaginationItem key={idx}>
            {pageNumber === "ellipsis" ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                className="cursor-pointer aria-disabled:cursor-not-allowed"
                onClick={handleChangePage(pageNumber as number)}
                isActive={pageNumber === currentPage}
                aria-current={pageNumber === currentPage ? "page" : undefined}
              >
                {pageNumber}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            className="cursor-pointer aria-disabled:pointer-events-none"
            onClick={handleChangePage(currentPage + 1)}
            aria-disabled={currentPage === totalPages}
            tabIndex={currentPage === totalPages ? -1 : 0}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CharacterPagination;
