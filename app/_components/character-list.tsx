"use client";

import { useState } from "react";
import { useCharacters } from "../_services/character";
import CharacterCard from "./character-card";
import { Button } from "./ui/button";

const CharacterList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { data: characters, isLoading, error } = useCharacters(currentPage);

  const handleChangePage =
    (target: "next" | "prev" | "first" | "last") => () => {
      switch (target) {
        case "next":
          setCurrentPage(currentPage + 1);
          break;
        case "prev":
          setCurrentPage(currentPage - 1);
          break;
        case "first":
          setCurrentPage(1);
          break;
        case "last":
          setCurrentPage(100);
          break;
      }
    };

  if (isLoading) return <div className="container mx-auto p-4">Loading...</div>;

  if (error)
    return <div className="container mx-auto p-4">Error: {error.message}</div>;

  return (
    <>
      <div className="grid grid-cols-3 items-center justify-center gap-2">
        {characters?.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <Button onClick={handleChangePage("prev")}>Previous</Button>
      <Button onClick={handleChangePage("next")}>Next</Button>
    </>
  );
};

export default CharacterList;
