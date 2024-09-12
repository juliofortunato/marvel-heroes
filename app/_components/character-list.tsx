"use client";

import { LoaderCircleIcon } from "lucide-react";
import { useMemo } from "react";
import useFilters from "../_hooks/useFilters";
import usePagination from "../_hooks/usePagination";
import { useCharacters } from "../_services/character";
import CharacterCard from "./character-card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

const ITEMS_PER_PAGE = 20;

const CharacterList = () => {
  const { search } = useFilters();
  const { page: currentPage, changePage } = usePagination();
  const { data, isLoading, error } = useCharacters(currentPage - 1, search);
  const totalPages = useMemo(
    () => Math.max(1, Math.ceil((data?.total || 0) / ITEMS_PER_PAGE)),
    [data?.total],
  );

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 3;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let start = Math.max(1, currentPage - 1);
      const end = Math.min(totalPages, start + maxPagesToShow - 1);

      if (end - start + 1 < maxPagesToShow) {
        start = Math.max(1, end - maxPagesToShow + 1);
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

  if (isLoading)
    return (
      <div className="flex w-full items-center justify-center pt-20">
        <LoaderCircleIcon size={48} className="animate-spin text-gray-900" />
      </div>
    );

  if (error)
    return <div className="container mx-auto p-4">Error: {error.message}</div>;

  const pageNumbers = generatePageNumbers();

  return (
    <>
      <div className="grid grid-cols-3 items-center justify-center gap-2">
        {data?.results?.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => changePage(currentPage - 1)}
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
                  onClick={() => changePage(pageNumber as number)}
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
              onClick={() => changePage(currentPage + 1)}
              aria-disabled={currentPage === totalPages}
              tabIndex={currentPage === totalPages ? -1 : 0}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default CharacterList;
