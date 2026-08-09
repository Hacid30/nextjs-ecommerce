'use client';

import { useState } from "react";

export default function ProductCard({ title, price, category }) {
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return(
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 flex flex-col justify-between hover:border-sky-500 transition">
            <div>
                <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">{category}</span>
                <h3 className="text-lg font-bold text-white mt-1 mb-2">{title}</h3>
                <p className="text-2xl font-bold text-slate-100 mb-4">${price}</p>
            </div>
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