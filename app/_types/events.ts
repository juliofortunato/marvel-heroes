export interface EventList {
  available: number;
  returned: number;
  collectionURI: string;
  items: EventSummary[];
}

interface EventSummary {
  resourceURI: string;
  name: string;
}
