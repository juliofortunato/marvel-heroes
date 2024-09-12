"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function useFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";

  const searchCharacter = (name: string) => {
    router.replace(`/?search=${name}`);
  };

  return { search, searchCharacter };
}
