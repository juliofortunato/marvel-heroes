import { useQuery } from "@tanstack/react-query";
import { Character } from "../_types/character";
import { marvelAPI } from "./marvel-api";

const fetchCharacters = (page: number) =>
  marvelAPI({
    method: "get",
    endpoint: "/characters",
    page,
  });

export const useCharacters = (page: number) => {
  return useQuery<Character[], Error>({
    queryKey: ["characters", page],
    queryFn: () => fetchCharacters(page),
  });
};

const fetchCharacterById = (characterId: string) =>
  marvelAPI({
    method: "get",
    endpoint: `/characters/${characterId}`,
  });

export const useCharacter = (characterId: string) => {
  return useQuery<Character[], Error>({
    queryKey: ["character", characterId],
    queryFn: () => fetchCharacterById(characterId),
  });
};
