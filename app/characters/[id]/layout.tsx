import { MoveLeftIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface CharacterLayoutProps {
  children: ReactNode;
}

const CharacterLayout = ({ children }: CharacterLayoutProps) => {
  return (
    <div className="relative min-h-screen bg-gray-950">
      <header className="absolute left-0 top-0 z-10 w-full bg-gray-950/20 px-7 py-5">
        <Link className="inline-flex text-white" href="/">
          <MoveLeftIcon />
        </Link>
      </header>
      {children}
    </div>
  );
};

export default CharacterLayout;
