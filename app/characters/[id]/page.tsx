"use client";

import Error from "@/app/_components/error";
import Loading from "@/app/_components/loading";
import { Accordion } from "@/app/_components/ui/accordion";
import { useCharacter } from "@/app/_services/character";
import CharacterSection from "@/app/characters/[id]/_components/character-section";
import Image from "next/image";
import { notFound } from "next/navigation";
import CharacterStats from "./_components/character-stats";
import ResourceList from "./_components/resource-list";

interface CharacterPageProps {
  params: {
    id: string;
  };
}

const CharacterPage = ({ params: { id } }: CharacterPageProps) => {
  const { data, isLoading, error } = useCharacter(id);
  const character = data?.results?.[0];
  const totalComics = character?.comics.available || 0;
  const totalEvents = character?.events.available || 0;
  const totalSeries = character?.series.available || 0;
  const totalStories = character?.stories.available || 0;

  if (!id) return notFound();

  if (isLoading) return <Loading variant="light" fullHeight />;

  if (error) return <Error message={error.message} />;

  return (
    <main>
      <div className="relative h-[495px] w-full">
        <Image
          src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
          alt={`${character?.name}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="relative -mt-12 space-y-4 rounded-t-3xl bg-gray-950 p-7 md:mx-auto md:max-w-[70%] md:space-y-8">
        <h1 className="text-5xl font-black text-white">{character?.name}</h1>

        <CharacterStats
          totalComics={totalComics}
          totalEvents={totalEvents}
          totalSeries={totalSeries}
          totalStories={totalStories}
        />

        <p className="text-white">
          {character?.description || "No description found"}
        </p>

        <Accordion type="multiple">
          {totalComics > 0 && (
            <CharacterSection
              content={<ResourceList list={character?.comics} />}
              title="Comics"
              value="comics"
            />
          )}
          {totalEvents > 0 && (
            <CharacterSection
              content={<ResourceList list={character?.events} />}
              title="Events"
              value="events"
            />
          )}
          {totalSeries > 0 && (
            <CharacterSection
              content={<ResourceList list={character?.series} />}
              title="Series"
              value="series"
            />
          )}
          {totalStories > 0 && (
            <CharacterSection
              content={<ResourceList list={character?.stories} />}
              title="Stories"
              value="stories"
            />
          )}
        </Accordion>
      </div>
    </main>
  );
};

export default CharacterPage;
