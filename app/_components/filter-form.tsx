"use client";

import { PopoverClose } from "@radix-ui/react-popover";
import { ChevronsUpDownIcon } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import useFilters, {
  ORDER_BY_OPTIONS,
  OrderByOption,
} from "../_hooks/useFilters";
import { Button } from "./ui/button";
import { Command, CommandItem, CommandList } from "./ui/command";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { SheetClose } from "./ui/sheet";

const FilterForm = () => {
  const { searchCharacter, search, changeOrder, orderBy } = useFilters();
  const [currentSearch, setCurrentSearch] = useState<string>(search);
  const [selectedOrderBy, setSelectedOrderBy] =
    useState<OrderByOption>(orderBy);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchCharacter(currentSearch);
    changeOrder(selectedOrderBy);
  };

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentSearch(e.target.value);
  };

  return (
    <form
      className="mt-6 grid w-full max-w-sm items-center gap-1.5 space-y-4"
      onSubmit={handleSubmit}
    >
      <div>
        <Label className="font-semibold" htmlFor="search">
          Nome
        </Label>
        <Input
          id="name"
          name="search"
          onChange={handleChangeSearch}
          placeholder="Nome do personagem"
          type="search"
          value={currentSearch}
        />
      </div>

      <div className="flex flex-col gap-1">
        <Label className="font-semibold" htmlFor="sortBy">
          Ordernar por
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox">
              {selectedOrderBy
                ? ORDER_BY_OPTIONS[selectedOrderBy]
                : "Selecionar..."}
              <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0">
            <Command>
              <PopoverClose>
                <CommandList>
                  {Object.entries(ORDER_BY_OPTIONS).map(([value, label]) => (
                    <CommandItem
                      key={value}
                      onSelect={(value) =>
                        setSelectedOrderBy(value as OrderByOption)
                      }
                      value={value}
                    >
                      {label}
                    </CommandItem>
                  ))}
                </CommandList>
              </PopoverClose>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <SheetClose asChild>
        <Button type="submit">Aplicar filtros</Button>
      </SheetClose>
    </form>
  );
};

export default FilterForm;
