import home from "../../assets/home.png";


function Home() {
  return (
    <div className="flex justify-center bg-indigo-900 text-white min-h-[80vh]">
      <div className="container grid grid-cols-2 items-center gap-8 px-4">

        {/* COLUNA ESQUERDA – TEXTO */}
        <div className="flex flex-col gap-4 mt-16">
          <h1 className="text-5xl font-bold">
            Seja Bem Vinde!
          </h1>

          <p className="text-xl">
            Expresse aqui seus pensamentos e opiniões
          </p>

          <button className="border-2 border-white rounded px-6 py-3 font-bold w-fit hover:bg-white hover:text-indigo-900 transition">
            Nova Postagem
          </button>
        </div>

        {/* COLUNA DIREITA – IMAGEM */}
        <div className="flex justify-center">
          <img
            src={home}
            alt="Imagem Home"
            className="w-full max-w-lg"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;
