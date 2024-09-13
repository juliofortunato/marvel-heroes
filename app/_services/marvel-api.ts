import md5 from "md5";
import { OrderByOption } from "../_hooks/useFilters";
import { Character } from "../_types/character";

const publicKey = process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY;
const privateKey = process.env.NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY;
const marvelAPIBaseUrl = "https://gateway.marvel.com/v1/public";

const ITEMS_PER_PAGE = 20;

interface marvelAPIParams {
  method: "get" | "post" | "put" | "delete";
  endpoint: string;
  page?: number;
  search?: string;
  orderBy?: OrderByOption;
}

export const marvelAPI = async ({
  method = "get",
  endpoint,
  page,
  search,
  orderBy,
}: marvelAPIParams): Promise<{ results: Character[]; total: number }> => {
  const ts = Date.now().toString();
  const hash = md5(ts + privateKey + publicKey);
  const paginationParam = page
    ? `&limit=${ITEMS_PER_PAGE}&offset=${page * ITEMS_PER_PAGE}`
    : "";
  const nameStartsWithParam = search ? `&nameStartsWith=${search}` : "";
  const orderByParam = orderBy ? `&orderBy=${orderBy}` : "";
  const response = await fetch(
    `${marvelAPIBaseUrl}${endpoint}?ts=${ts}&apikey=${publicKey}&hash=${hash}${nameStartsWithParam}${orderByParam}${paginationParam}`,
    {
      method,
    },
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const {
    data: { results, total },
  } = await response.json();

  return {
    results,
    total,
  };
};
