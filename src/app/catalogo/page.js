import ProductCard from '../../components/ProductCard';
import { mockProducts } from '@/lib/products';

export default function CatalogoPage() {
    return (
        <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold text-white mb-8">Todos los Productos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProducts.map((product) => (
            <ProductCard 
                key={product.id}
                id={product.id}
                title={product.title}
                category={product.category}
                price={product.price}
            />
            ))}
        </div>
        </main>
    );
}