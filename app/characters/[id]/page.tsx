"use client";

import CharacterSection from "@/app/_components/character-section";
import CharacterStats from "@/app/_components/character-stats";
import ResourceList from "@/app/_components/resource-list";
import { Accordion } from "@/app/_components/ui/accordion";
import { useCharacter } from "@/app/_services/character";
import { LoaderCircleIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

interface CharacterPageProps {
  params: {
    id: string;
  };
}

const CharacterPage = ({ params: { id } }: CharacterPageProps) => {
  const { data, isLoading, error } = useCharacter(id);
  const character = data?.[0];
  const totalComics = character?.comics.available || 0;
  const totalEvents = character?.events.available || 0;
  const totalSeries = character?.series.available || 0;
  const totalStories = character?.stories.available || 0;

  if (!id) return notFound();

  if (isLoading)
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <LoaderCircleIcon size={48} className="animate-spin text-white" />
      </div>
    );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="relative h-[495px] w-full">
        <Image
          src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
          alt={`${character?.name}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="relative -mt-12 space-y-4 rounded-t-3xl bg-gray-950 p-7">
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
    </>
  );
};

export default CharacterPage;
