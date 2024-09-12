import { ChartNoAxesCombinedIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FilterForm from "./filter-form";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white px-7 py-5 text-gray-900">
      <div className="order-1 md:order-2">
        <Sheet>
          <SheetTrigger className="flex items-center gap-2 hover:underline">
            <ChartNoAxesCombinedIcon />
            <span className="hidden font-medium md:inline-block">
              Estatísticas
            </span>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Estatísticas</SheetTitle>
            </SheetHeader>
            <div className="space-y-4">Aqui vão os gráficos</div>
          </SheetContent>
        </Sheet>
      </div>

      <Link className="order-2 md:order-1 md:mr-auto" href="/">
        <Image src="/logo.svg" alt="Marvel" width={71} height={26} />
      </Link>

      <div className="order-3 md:ml-6">
        <Sheet>
          <SheetTrigger className="flex items-center gap-2 hover:underline">
            <SearchIcon />
            <span className="hidden font-medium md:inline-block">
              Pesquisar
            </span>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Pesquisar</SheetTitle>
            </SheetHeader>
            <div className="space-y-4">
              <FilterForm />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
