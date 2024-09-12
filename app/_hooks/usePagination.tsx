"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function usePagination() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const navigateTo = (page: number) => {
    if (page < 1) return;
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("page", String(page));
    router.replace(`?${searchParams.toString()}`);
  };

  return { currentPage, navigateTo };
}
