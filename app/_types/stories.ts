export interface StoryList {
  available: number;
  returned: number;
  collectionURI: string;
  items: StorySummary[];
}

interface StorySummary {
  resourceURI: string;
  name: string;
  type: string;
}
