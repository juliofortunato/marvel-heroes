import { useQuery } from "@tanstack/react-query";
import { OrderByOption } from "../_hooks/useFilters";
import { Character } from "../_types/character";
import { marvelAPI } from "./marvel-api";

const fetchCharacters = (
  page: number,
  search: string,
  orderBy: OrderByOption,
) =>
  marvelAPI({
    method: "get",
    endpoint: "/characters",
    page,
    search,
    orderBy,
  });

export const useCharacters = (
  page: number,
  search: string,
  orderBy: OrderByOption,
) => {
  return useQuery<{ results: Character[]; total: number }, Error>({
    queryKey: ["characters", page, search, orderBy],
    queryFn: () => fetchCharacters(page, search, orderBy),
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
