import Link from "next/link";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import { mockProducts } from "@/lib/products";

async function getProduct(id) {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`, { cache: 'no-store' });

        if(!res.ok) {
            console.warn('Error de respuesta API, buscando en mockProducts');
            return mockProducts.find((p) => p.id === Number(id)) || null;
        };

        return await res.json();

    } catch (error) {
        console.error("Error de conexión con la API, buscando en mockProducts:", error);
        return mockProducts.find((p) => p.id === Number(id)) || null;
    }
}

export default async function ProductDetailPage({ params }) {
    const { id } = await params;
    const product = await getProduct(id);

    if(!product){
        return (
            <main className="max-w-4xl mx-auto px-6 py-20 text-center">
                <h1 className="text-3xl font-bold text-red-400 mb-4" >Producto no encontrado</h1>
                <p className="text-slate-400 mb-6" >El producto que buscas no existe o fue removido.</p>
                <Link href='/catalogo' className="text-sky-400 hover:underline">
                    ← Volver al catálogo
                </Link>
            </main>
        )
    }

    return (
        <main className="bg-slate-900 min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-6">
            <Link href="/catalogo" className="text-sky-400 hover:underline text-sm mb-6 inline-block" >
                ← Volver al catálogo
            </Link>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
                <div className="bg-white p-6 rounded-xl mb-6 flex items-center justify-center h-72">
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
                    <AddToCartButton product={product}/>
                </div>
                </div>
            </div>
            </div>
        </main>
    )

    
}