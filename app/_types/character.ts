import { ComicList } from "./comics";
import { EventList } from "./events";
import { SeriesList } from "./series";
import { StoryList } from "./stories";

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Url[];
  thumbnail: Image;
  comics: ComicList;
  stories: StoryList;
  events: EventList;
  series: SeriesList;
}

interface Url {
  type: string;
  url: string;
}

interface Image {
  path: string;
  extension: string;
}
