import ProductCard from '../../components/ProductCard';
import { mockProducts } from '@/lib/products';

async function getProducts() {
    try {
        const res = await fetch('https://fakestoreapi.com/products', 
            { next:{ revalidate: 60} });
        
        if (!res.ok) {
        console.warn('Error al obtener los productos');
        return mockProducts;
        }

        return await res.json();
    } catch (error) {
        console.error("Error de conexión, usando productos de respaldo:", error);
        return mockProducts;
    }
}

export default async function CatalogoPage() {
    const products = await getProducts();
    
    return (
        <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold text-white mb-8">Todos los Productos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
            <ProductCard 
                key={product.id}
                id={product.id}
                title={product.title}
                category={product.category}
                price={product.price}
                image={product.image}
            />
            ))}
        </div>
        </main>
    );
}