import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-extrabold text-white mb-4">
        Bienvenido a <span className="text-sky-400">Mi Tienda</span>
      </h1>
      <p className="text-slate-300 text-lg max-w-xl mb-8">
        Encuentra la mejor tecnología y accesorios con entregas rápidas y pagos seguros.
      </p>
      <Link 
        href="/catalogo" 
        className="bg-sky-500 hover:bg-sky-400 text-slate-900 font-bold px-8 py-4 rounded-xl transition text-lg"
      >
        Explorar Catálogo →
      </Link>
    </main>
  );
}