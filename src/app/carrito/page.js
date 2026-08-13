'use client';

import Link from "next/link";
import { useCartStore } from "../store/useCartStore";

export default function CarritoPage() {
    const { cart, addToCart, decreaseQuantity, removeFromCart, clearCart } = useCartStore();

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cart.length === 0) {
        return (
            <main className="min-h-screen bg-slate-900 max-h-screen flex flex-col items-center justify-center p-6 text-center text-white">
                <h1 className="text-2xl font-bold mb-2">Tu carrito está vacío 🛒</h1>
                <p className="text-slate-400 mb-6">Parece que aún no has agregado ningún producto.</p>
                <Link 
                    href='/catalogo'
                    className="bg-sky-500 hover:bg-sky-400 text-slate-900 font-bold px-6 py-3 rounded-xl transition"
                >
                    Explorar Catálogo
                </Link>
            </main>

        )
    }

    return (
        <main className="min-h-screen bg-slate-900 mx-auto px-6 py-12 text-white">
            <h1 className="text-3xl font-extrabold mb-8">Carrito de Compras</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Listado de Productos */}
                <div className="lg:col-span-2 space-y-4">
                    {cart.map((item) => (
                        <div 
                            key={item.id}
                            className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex items-center justify-between gap-4"
                        >
                            {item.image && (
                                <di className="bg-white p-2 rounded-lg w-16 h-16 shrink-0 flex items-center justify-center">
                                    <img src={item.image} alt={item.title} className="max-h-full object-contain" />
                                </di>
                            )}

                            <div className="grow">
                                <h3 className="font-semibold text-sm line-clamp-1">{item.title}</h3>
                                <p className="text-sky-400 font-bold text-sm">${item.price}</p>
                            </div>

                            {/* Controles de Cantidad */}
                            <div className="flex items-center gap-2 bg-slate-900 rounded-lg px-2 py-1 border border-slate-700">
                                <butto 
                                    onClick={ () =>  decreaseQuantity(item.id)}
                                    className="px-2 py-1 text-slate-400 hover:text-white font-bold"
                                >
                                    -
                                </butto>
                                <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                                <button 
                                    onClick={ () => addToCart(item)}
                                    className="px-2 py-1 text-slate-400 hover:text-white font-bold"
                                >
                                    +
                                </button>
                            </div>

                            {/* Subtotal y Eliminar */}
                            <div className="text-right">
                                <p className="font-bold text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                                <button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-xs text-red-400 hover:underline mt-1"
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={clearCart}
                        className="text-xs text-slate-400 hover:text-red-400 underline pt-2"
                    >
                        Vaciar todo el carrito
                    </button>
                </div>

                {/* Resumen de Compra */}
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 h-fit">
                    <h2 className="text-xl font-bold mb-4 border-b border-slate-700 pb-2">Resumen</h2>
                    <div className="flex justify-between mb-4 text-slate-300">
                        <span>Subtotal</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-4 text-slate-300">
                        <span>Envío</span>
                        <span className="text-emerald-400">Gratis</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold border-slate-700 pt-4 mb-6">
                        <span>Total</span>
                        <span className="text-sky-400">${total.toFixed(2)}</span>
                    </div>
                    <button
                        className="w-full bg-sky-500 hover:bg-sky-400 text-slate-900 font-bold py-3 rounded-xl transition"
                    >
                        Proceder al Pago
                    </button>
                </div>
            </div>
        </main>
    )
}