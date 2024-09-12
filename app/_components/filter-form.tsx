"use client";

import { FormEvent } from "react";
import useFilters from "../_hooks/useFilters";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { SheetClose } from "./ui/sheet";

const FilterForm = () => {
  const { searchCharacter } = useFilters();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchValue = formData.get("search") as string;
    searchCharacter(searchValue);
  };

  return (
    <form
      className="mt-6 grid w-full max-w-sm items-center gap-1.5"
      onSubmit={handleSubmit}
    >
      <Label htmlFor="email">Nome</Label>
      <Input
        type="text"
        id="name"
        name="search"
        placeholder="Nome do personagem"
      />
      <SheetClose asChild>
        <Button type="submit">Aplicar filtros</Button>
      </SheetClose>
    </form>
  );
};

export default FilterForm;
