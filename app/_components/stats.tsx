import { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useFilters from "../_hooks/useFilters";
import usePagination from "../_hooks/usePagination";
import { useCharacters } from "../_services/character";
import Error from "./error";
import Loading from "./loading";
import { ChartContainer } from "./ui/chart";

const Stats = () => {
  const { currentPage } = usePagination();
  const { search, orderBy } = useFilters();
  const { data, isLoading, error } = useCharacters(
    currentPage - 1,
    search,
    orderBy,
  );
  const formattedData = useMemo(
    () =>
      data?.results.map((character) => ({
        name: character.name,
        value: character.comics.available,
      })),
    [data?.results],
  );

  formattedData?.sort((a, b) => b.value - a.value);

  if (isLoading) return <Loading />;

  if (error) return <Error message={error.message} />;

  return (
    <ChartContainer config={{}} className="bg-red h-full w-full py-8 pb-10">
      <BarChart
        data={formattedData}
        layout="vertical"
        margin={{
          top: 5,
          left: -60,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" width={250} dataKey="name" />
        <Tooltip formatter={(value) => `${value} quadrinhos`} />
        <Bar dataKey="value" label="Quadrinhos">
          {formattedData?.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill="#ef4444" />
          ))}
        </Bar>
      </BarChart>
    </ChartContainer>
  );
};

export default Stats;
