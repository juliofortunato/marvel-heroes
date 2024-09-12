"use client";

import { ChevronsUpDownIcon } from "lucide-react";
import { FormEvent, useState } from "react";
import useFilters from "../_hooks/useFilters";
import { Button } from "./ui/button";
import { Command, CommandItem, CommandList } from "./ui/command";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { SheetClose } from "./ui/sheet";

const SORT_BY_OPTIONS = {
  name: "Nome crescente",
  "-name": "Nome decrescente",
  modified: "Data de modificação mais recente",
  "-modified": "Data de modificação mais antiga",
};

type SortByOption = keyof typeof SORT_BY_OPTIONS;

const FilterForm = () => {
  const { searchCharacter } = useFilters();
  const [sortBy, setSortBy] = useState<SortByOption | undefined>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchValue = formData.get("search") as string;
    searchCharacter(searchValue);
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
          type="text"
          id="name"
          name="search"
          placeholder="Nome do personagem"
        />
      </div>

      <div className="flex flex-col gap-1">
        <Label className="font-semibold" htmlFor="sortBy">
          Ordernar por
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox">
              {sortBy ? SORT_BY_OPTIONS[sortBy] : "Selecionar..."}
              <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0">
            <Command>
              <CommandList>
                {Object.entries(SORT_BY_OPTIONS).map(([value, label]) => (
                  <CommandItem
                    key={value}
                    onSelect={() => setSortBy(value as SortByOption)}
                    value={value}
                  >
                    {label}
                  </CommandItem>
                ))}
              </CommandList>
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
