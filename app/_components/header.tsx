import { MenuIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white px-7 py-5 text-gray-900">
      <MenuIcon />
      <Link href="/">
        <Image src="/logo.svg" alt="Marvel" width={71} height={26} />
      </Link>
      <SearchIcon />
    </header>
  );
};

export default Header;
