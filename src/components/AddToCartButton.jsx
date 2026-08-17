'use client';

import { useState } from "react";
import { useCartStore } from "@/app/store/useCartStore";

export default function AddToCartButton({ product }) {
    const [added, setAdded] = useState(false);
    const addItem = useCartStore((state) => state.addToCart);

    const handleAddToCar = (e) => {
        e.preventDefault();

        addItem(product);

        setAdded(true);
        setTimeout( () => setAdded(false) , 2000);
    }
    return(
        <button
            onClick={handleAddToCar}
            className={`px-6 py-3 rounded-lg font-bold ${
                    added ? 'bg-emerald-500 text-slate-900' : 'bg-sky-500 hover:bg-sky-400 text-slate-900'
                }`}
        >
            Añadir al Carrito
        </button>
    )
}