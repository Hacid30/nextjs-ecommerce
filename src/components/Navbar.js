'use client'

import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/app/store/useCartStore";
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Navbar() {
    const cart = useCartStore((state) => state.cart);
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const { data: session, status } = useSession();

    return (
        <nav className="sticky top-0 z-50 bg-slate-800 border-b border-slate-700 flex flex-col sm:flex-row justify-between items-center p-4 text-white">
            <Link href="/catalogo" className="text-xl font-bold text-sky-400">
                MiTienda
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

            {status === 'loading' ? (
                <span className="text-xs text-slate-500">Cargando...</span>
            ) : session ? (
                <div>
                    {session.user.image && (
                        <Image
                            src={session.user.image}
                            alt={session.user.name || 'Usuario'}
                            width={40}
                            height={40}
                            className="w-8 h-8 rounded-full border border-sky-400"
                        />
                    )}
                    <button
                        onClick={() => signOut()}
                        className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-2 rounded-lg boder border-slate-700 transition"
                    >
                        Salir
                    </button>
                </div>
            ) : (
                <button
                    onClick={() => signIn('github')}
                    className='text-sm bg-slate-800 hover:bg-slate-700 text-white font-semibold px-4 py-2 rounded-lg border border-slate-700 flex items-center gap-2 transition'
                >
                    Iniciar Sesion
                </button>
            )}
        </nav>
    );
}