import Image from "next/image";
import Link from "next/link";
import { Character } from "../_types/character";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <Link
      href={`/characters/${character.id}`}
      key={character.id}
      className="group block"
    >
      <div className="relative h-[230px] w-full overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ease-in-out group-hover:z-20 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-lg lg:h-[400px]">
        <Image
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          className="h-full w-full object-cover"
          fill
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
          data-testid="gradient-overlay"
        />

        <div className="absolute bottom-0 left-0 p-2">
          <h2 className="text-lg font-bold text-white">{character.name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
