import { ReactNode } from "react";
import CharacterHeader from "./_components/character-header";

interface CharacterLayoutProps {
  children: ReactNode;
}

const CharacterLayout = ({ children }: CharacterLayoutProps) => {
  return (
    <div className="relative min-h-screen bg-gray-950">
      <CharacterHeader />
      {children}
    </div>
  );
};

export default CharacterLayout;
