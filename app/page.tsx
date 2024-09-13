import CharacterList from "./_components/character-list";
import Header from "./_components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="md:max space-y-4 px-7 md:space-y-8">
        <div>
          <h2 className="text-sm font-semibold text-gray-400 md:text-lg">
            Bem vindo ao Marvel Heroes
          </h2>
          <h1 className="text-4xl font-black">Escolha o seu personagem</h1>
        </div>
        <CharacterList />
      </main>
    </>
  );
}
