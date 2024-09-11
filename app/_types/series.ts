export interface SeriesList {
  available: number;
  returned: number;
  collectionURI: string;
  items: SeriesSummary[];
}

interface SeriesSummary {
  resourceURI: string;
  name: string;
}
