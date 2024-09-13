import { ComicList } from "../../../_types/comics";
import { EventList } from "../../../_types/events";
import { SeriesList } from "../../../_types/series";
import { StoryList } from "../../../_types/stories";

interface ResourceListProps {
  list: ComicList | EventList | SeriesList | StoryList | undefined;
}

const ResourceList = ({ list }: ResourceListProps) => {
  if (!list) return null;

  return (
    <ul className="space-y-1">
      {list.items.map((item, idx) => (
        <li className="text-white md:text-lg" key={idx}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ResourceList;
