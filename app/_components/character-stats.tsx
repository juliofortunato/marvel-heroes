import { Card, CardContent } from "./ui/card";

interface CharacterStatsProps {
  totalComics?: number;
  totalEvents?: number;
  totalSeries?: number;
  totalStories?: number;
}

const CharacterStats = ({
  totalComics = 0,
  totalEvents = 0,
  totalSeries = 0,
  totalStories = 0,
}: CharacterStatsProps) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <Card>
        <CardContent className="flex flex-col items-center justify-center p-4">
          <span className="text-3xl font-black">{totalComics}</span>
          <span className="text-sm font-semibold">Comics</span>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col items-center justify-center p-4">
          <span className="text-3xl font-black">{totalStories}</span>
          <span className="text-sm font-semibold">Stories</span>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col items-center justify-center p-4">
          <span className="text-3xl font-black">{totalEvents}</span>
          <span className="text-sm font-semibold">Events</span>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col items-center justify-center p-4">
          <span className="text-3xl font-black">{totalSeries}</span>
          <span className="text-sm font-semibold">Series</span>
        </CardContent>
      </Card>
    </div>
  );
};

export default CharacterStats;
