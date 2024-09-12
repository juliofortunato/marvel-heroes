"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function usePagination() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const changePage = (page: number) => {
    router.replace(`/?page=${page}`);
  };

  return { page, changePage };
}
