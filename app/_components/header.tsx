import { MenuIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-7 py-5 text-gray-900">
      <MenuIcon />
      <Link href="/">
        <Image src="/logo.svg" alt="Marvel" width={71} height={26} />
      </Link>
      <SearchIcon />
    </div>
  );
};

export default Header;
