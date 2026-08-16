'use client';

import { useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import { useCartStore } from '@/app/store/useCartStore';

export default function ProductCard({ id, title, price, category, image }) {
    const [added, setAdded] = useState(false);
    const addToCart = useCartStore((state) => state.addToCart);

    const handleAddToCart = (e) => {
        e.preventDefault();

        addToCart({ id, title, price, category, image });

        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return(
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 flex flex-col justify-between hover:border-sky-500 transition">
            <Link href={`/catalogo/${id}`}>
                <div>
                    <div className="relative bg-white p-4 rounded-lg mb-4 h-48 flex items-center justify-center">
                        <Image 
                            src={image} 
                            alt={title}
                            fill
                            className="object-contain p-2" 
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                    </div>
                    
                    <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">{category}</span>
                    <h3 className="text-lg font-bold text-white mt-1 mb-2">{title}</h3>
                    <p className="text-2xl font-bold text-slate-100 mb-4">${price}</p>
                </div>
            </Link>

            <button
                onClick={handleAddToCart}
                className={`w-full py-2.5 rounded-lg font-bold ${
                    added ? 'bg-emerald-500 text-slate-900' : 'bg-sky-500 hover:bg-sky-400 text-slate-900'
                }`}
            >
                {added ? '¡Agregado!' : 'Agregar al Carrito'}
            </button>
        </div>
    )
}