"use client";

import { useSearchParams } from "next/navigation";

export const ORDER_BY_OPTIONS = {
  name: "Nome crescente",
  "-name": "Nome decrescente",
  modified: "Data de modificação mais recente",
  "-modified": "Data de modificação mais antiga",
};

export type OrderByOption = keyof typeof ORDER_BY_OPTIONS;

export default function useFilters() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const orderBy: OrderByOption =
    (searchParams.get("orderBy") as OrderByOption) ||
    Object.keys(ORDER_BY_OPTIONS)[0];

  const updateFilters = (filter: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.delete("page");
    searchParams.set(filter, value);

    window.history.replaceState(
      {},
      "",
      `${window.location.origin}?${searchParams.toString()}`,
    );
  };

  const searchCharacter = (name: string) => {
    updateFilters("search", name);
  };

  const changeOrder = (orderBy: OrderByOption) => {
    updateFilters("orderBy", orderBy);
  };

  return { search, searchCharacter, orderBy, changeOrder };
}
