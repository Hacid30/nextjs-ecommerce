import { auth } from "@/auth";
import Link from "next/link";
import Image from "next/image";

export default async function CheckoutPage() {
    const session = await auth();

    if (!session) {
        return (<main className="bg-slate-800 min-h-screen flex flex-col items-center justify-center p-6 text-center text-white">
            <div className="border border-slate-700 p-8 rounded-2xl max-w-md w-full shadow-xl">
                <div className="text-5xl mb-4"> 🔒 </div>
                    <h1 className="text-2xl font-bold mb-2"> Acceso Restringido </h1>
                    <p className="text-slate-400 text-sm mb-6">
                        Para acceder al simulador de pago y completar tu compra, necesitas iniciar sesión con tu cuenta de GitHub.</p>
                    <Link 
                        href='/carrito'
                        className="inline-block w-full bg-sky-500 hover:bg-sky-400 text-slate-900 font-bold py-3 rounded-xl transition"
                    >
                        Volver al Carrito
                    </Link>
            </div>
        </main>
        );
    }

    return (
        <main className='bg-slate-800 min-h-screen px-6 py-12 text-white text-center'>
            <h1 className="text-3xl font-extrabold mb-2">Simulador de Pago 💳</h1>
            <p className="text-slate-400 mb-8">
                Bienvenido, <span className="text-sky-400 font-semibold"> {session.user?.name}</span>. Confrima los detalle de tu orden. 
            </p>

            <div className="max-w-3xl mx-auto border border-slate-700 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-4 border-b border-slate-700 pb-4">
                    {session.user?.image && (
                        <Image
                            src={session.user.image}
                            alt="Avatar"
                            width={40}
                            height={40}
                            className="w-12 h-12 rounded-full border-2 border-sky-400"
                        />
                    )}

                    <div>
                        <p className="font-bold">{session.user?.name}</p>
                        <p className="text-xs text-slate-400">{session.user?.email}</p>
                    </div>
                </div>

                <div className="pt-2">
                    <p className="text-sm text-slate-400 mb-4">
                        Este es un entorno de pruebas. Al hacer clic en el botón, simularás una transacción exitosa.
                    </p>
                    <butto className='w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-3 py-3 rounded-xl transition'>
                        Pagar Ahora (simulación)
                    </butto>
                </div>
            </div>
        </main>
    )
}