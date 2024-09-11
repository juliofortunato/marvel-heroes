export interface ComicList {
  available: number;
  returned: number;
  collectionURI: string;
  items: ComicSummary[];
}

interface ComicSummary {
  resourceURI: string;
  name: string;
}
