'use client'

import Link from "next/link";
import { useCartStore } from "@/app/store/useCartStore";

export default function Navbar() {
    const cart = useCartStore((state) => state.cart);

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    return (
        <nav className="sticky top-0 z-50 bg-slate-800 border-b border-slate-700 px-6 py-4 flex justify-between items-center text-white">
            <Link href="/" className="text-xl font-bold text-sky-400">
                NextShop
            </Link>
            <div className="flex gap-6 text-sm font-medium">
                <Link href="/" className="hover:text-sky-400  transition" > Inicio </Link>
                <Link href="/catalogo" className="hover:text-sky-400  transition" > Catalogo </Link>
                <Link href="/carrito" className="hover:text-sky-400  transition" > 
                🛒 Carrito
                {totalItems > 0 && (
                    <span className="bg-slate-900 text-sky-400 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {totalItems}
                    </span>
                )}
                </Link>
            </div>
        </nav>
    );
}