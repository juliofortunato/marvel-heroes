import md5 from "md5";
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
}

export const marvelAPI = async ({
  method = "get",
  endpoint,
  page,
  search,
}: marvelAPIParams): Promise<{ results: Character[]; total: number }> => {
  const ts = Date.now().toString();
  const hash = md5(ts + privateKey + publicKey);
  const pagination = page
    ? `&limit=${ITEMS_PER_PAGE}&offset=${page * ITEMS_PER_PAGE}`
    : "";
  const nameStartsWith = search ? `&nameStartsWith=${search}` : "";
  const response = await fetch(
    `${marvelAPIBaseUrl}${endpoint}?ts=${ts}&apikey=${publicKey}&hash=${hash}${nameStartsWith}${pagination}`,
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
