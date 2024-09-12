import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="container mx-auto flex w-full flex-col items-center justify-center gap-10 py-12">
      <Link href="/">
        <Image src="logo.svg" width={200} height={100} alt="Marvel" />
      </Link>
      <div className="mt-6 flex flex-col items-center gap-2 text-center">
        <h2 className="text-9xl font-black">404</h2>
        <h1 className="text-5xl font-bold">Página não encontrada</h1>
      </div>

      <Link className="hover:underline" href="/">
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default NotFoundPage;
