"use client";

import { MenuIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import useFilters from "../_hooks/useFilters";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Header = () => {
  const { searchCharacter } = useFilters();

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white px-7 py-5 text-gray-900">
      <MenuIcon />
      <Link href="/">
        <Image src="/logo.svg" alt="Marvel" width={71} height={26} />
      </Link>

      <Sheet>
        <SheetTrigger>
          <SearchIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Pesquisar</SheetTitle>
          </SheetHeader>
          <div className="space-y-4">
            <form
              className="mt-6 grid w-full max-w-sm items-center gap-1.5"
              onSubmit={(e: any) => {
                e.preventDefault();
                searchCharacter(e.target.search.value);
              }}
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
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
