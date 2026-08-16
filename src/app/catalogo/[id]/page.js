import Link from "next/link";
import Image from "next/image";

async function getProduct(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if(!res.ok) return null;
    return res.json();
}

export default async function ProductDetailPage({ params }) {
    const { id } = await params;
    const product = await getProduct(id);

    if(!product){
        return (
            <main className="max-w-4xl max-auto px-6 py-20 text-center">
                <h1 className="text-3xl font-bold text-red-400 mb-4" >Producto no encontrado</h1>
                <p className="text-slate-400 mb-6" >El producto que buscas no existe o fue removido.</p>
                <Link href='/catalogo' className="text-sky-400 hover:underline">
                    ← Volver al catálogo
                </Link>
            </main>
        )
    }

    return (
        <main className="bg-slate-800">
            <div className="max-w-4xl mx-auto px-6 py-12">
            <Link href="/catalogo" className="text-sky-400 hover:underline text-sm mb-6 inline-block" >
                ← Volver al catálogo
            </Link>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
                <div className="bg-white p-6 rounded-xl mb-4 flex items-center justify-center h-72">
                    <Image 
                        src={product.image} 
                        alt={product.title} 
                        width={400}
                        height={400}
                        className="max-h-full object-contain"/>
                </div>
                
                <div>
                <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-2">
                    {product.category}
                </span>
                <h1 className="text-3xl font-extrabold text-white mb-4">{product.title}</h1>
                <p className="text-slate-300 textl-lg mb-6 leading-relaxed">{product.description}</p>

                <div className="flex items-center justify-between pt-6 border-t border-slate-700">
                    <p className="text-3xl front-bold text-white">${product.price}</p>
                    <button className="bg-sky-500 hover:bg-sky-400 text-slate-900 font-bold px-6 py-3 rounded-xl transition">
                    Añadir al Carrito
                    </button>
                </div>
                </div>
            </div>
            </div>
        </main>
    )

    
}