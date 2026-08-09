export default function Home() {
  return(
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4 text-sky-400">
        Bienvenido a NextShop
      </h1>
      <p className="text-slate-300 text-lg max-w-md text-center mb-6">
        Tu nueva tienda en línea construida con Next.js App Router y Tailwinds CSS.
      </p>
      <button className="bg-sky-500 hover:bg-sky-400 text-slate-900 font-bold px-6 py-3 rounded-lg transition" >
        Ver Catálago
      </button>
    </main>
  );
}