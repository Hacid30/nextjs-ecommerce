import ProductCard from '../../components/ProductCard';

const mockProducts = [
    { id: 1, title: 'Laptop Pro 16', price: 1200, category: 'Tecnología' },
    { id: 2, title: 'Auriculares Noise Cancelling', price: 250, category: 'Audio' },
    { id: 3, title: 'Teclado Mecánico RGB', price: 110, category: 'Accesorios' },
    { id: 4, title: 'Monitor 4K 27"', price: 450, category: 'Tecnología' },
];

export default function CatalogoPage() {
    return (
        <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold text-white mb-8">Todos los Productos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
            ))}
        </div>
        </main>
    );
}