import Header from "./_components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-7">
        <div>
          <h2 className="text-sm font-semibold text-gray-400">
            Bem vindo ao Marvel Heroes
          </h2>
          <h1 className="text-4xl font-black">Escolha o seu personagem</h1>
        </div>
      </div>
    </>
  );
}
