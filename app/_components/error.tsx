import { SkullIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ErrorProps {
  message?: string;
}

const Error = ({ message }: ErrorProps) => {
  return (
    <div className="container mx-auto flex w-full flex-col items-center justify-center gap-10 py-12">
      <Link href="/">
        <Image src="logo.svg" width={200} height={100} alt="Marvel" />
      </Link>
      <div className="mt-6 flex flex-col items-center gap-2 text-center">
        <h2 className="text-9xl font-black">
          <SkullIcon size={50} />
        </h2>
        <h1 className="text-5xl font-bold">Erro</h1>
        {message && <p>{message}</p>}
      </div>

      <Link className="hover:underline" href="/">
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default Error;
