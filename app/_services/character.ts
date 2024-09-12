import { useQuery } from "@tanstack/react-query";
import { Character } from "../_types/character";
import { marvelAPI } from "./marvel-api";

const fetchCharacters = (page: number, search: string) =>
  marvelAPI({
    method: "get",
    endpoint: "/characters",
    page,
    search,
  });

export const useCharacters = (page: number, search: string) => {
  return useQuery<{ results: Character[]; total: number }, Error>({
    queryKey: ["characters", page, search],
    queryFn: () => fetchCharacters(page, search),
  });
};

const fetchCharacterById = (characterId: string) =>
  marvelAPI({
    method: "get",
    endpoint: `/characters/${characterId}`,
  });

export const useCharacter = (characterId: string) => {
  return useQuery<{ results: Character[]; total: number }, Error>({
    queryKey: ["character", characterId],
    queryFn: () => fetchCharacterById(characterId),
  });
};
