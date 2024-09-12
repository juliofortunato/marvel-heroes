"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function usePagination() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const changePage = (page: number) => {
    if (page < 1) return;
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("page", String(page));
    router.replace(`?${searchParams.toString()}`);
  };

  return { page, changePage };
}
