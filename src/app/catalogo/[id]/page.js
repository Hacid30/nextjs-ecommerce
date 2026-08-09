import Link from "next/link";

const mockProducts = [
    { id: 1, title: 'Laptop Pro 16', price: 1200, category: 'Tecnología', description: 'Potente laptop para desarrollo web y diseño con procesador de última generación y 32GB de RAM.' },
    { id: 2, title: 'Auriculares Noise Cancelling', price: 250, category: 'Audio', description: 'Cancelación de ruido activa, almohadillas ergonómicas y hasta 30 horas de batería continua.' },
    { id: 3, title: 'Teclado Mecánico RGB', price: 110, category: 'Accesorios', description: 'Switches táctiles silenciosos con iluminación RGB totalmente personalizable.' },
    { id: 4, title: 'Monitor 4K 27"', price: 450, category: 'Tecnología', description: 'Pantalla IPS con resolución 4K UHD, tasa de refresco de 144Hz y calibración de color profesional.' },
];

export default async function ProductDetailPage({ params }) {
    const { id } = await params;
    const  product = mockProducts.find( (item) => item.id === Number(id));

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
        <main className="max-w-4xl mx-auto px-6 py-12">
            <Link href="/catalogo" className="text-sky-400 hover:underline text-sm mb-6 inline-block" >
                ← Volver al catálogo
            </Link>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
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
        </main>
    )

    
}