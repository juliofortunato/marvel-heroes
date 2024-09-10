"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCharacters } from "../_services/character";
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
    <div>
      {characters?.map((character) => (
        <Link
          href={`/character/${character.id}`}
          key={character.id}
          className="block"
        >
          <div className="rounded-lg border p-4 transition-shadow hover:shadow-lg">
            <h2 className="text-xl font-semibold">{character.name}</h2>
            <Image
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
              className="mt-2 h-48 w-full rounded object-cover"
              width={300}
              height={300}
            />
          </div>
        </Link>
      ))}
      <Button onClick={handleChangePage("prev")}>Previous</Button>
      <Button onClick={handleChangePage("next")}>Next</Button>
    </div>
  );
};

export default CharacterList;
