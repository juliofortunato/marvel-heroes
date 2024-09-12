"use client";

import { MoveLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const CharacterHeader = () => {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };

  return (
    <header className="absolute left-0 top-0 z-10 w-full bg-gray-950/20 px-7 py-5">
      <button
        className="inline-flex text-white"
        onClick={handleBackClick}
        title="Voltar"
      >
        <MoveLeftIcon />
      </button>
    </header>
  );
};

export default CharacterHeader;
