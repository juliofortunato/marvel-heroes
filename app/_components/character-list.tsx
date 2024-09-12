"use client";

import { useMemo } from "react";
import useFilters from "../_hooks/useFilters";
import usePagination from "../_hooks/usePagination";
import { useCharacters } from "../_services/character";
import CharacterCard from "./character-card";
import CharacterPagination from "./character-pagination";
import Loading from "./loading";

const ITEMS_PER_PAGE = 20;

const CharacterList = () => {
  const { search } = useFilters();
  const { currentPage } = usePagination();
  const { data, isLoading, error } = useCharacters(currentPage - 1, search);
  const totalPages = useMemo(
    () => Math.max(1, Math.ceil((data?.total || 0) / ITEMS_PER_PAGE)),
    [data?.total],
  );

  if (isLoading) return <Loading />;

  if (error)
    return <div className="container mx-auto p-4">Error: {error.message}</div>;

  return (
    <>
      <div className="grid grid-cols-3 items-center justify-center gap-2 md:grid-cols-4 md:gap-4">
        {data?.results?.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      <CharacterPagination totalPages={totalPages} />
    </>
  );
};

export default CharacterList;
