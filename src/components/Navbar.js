import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex justify-between items-center text-white">
            <Link href="/" className="text-xl font-bold text-sky-400">
                NextShop
            </Link>
            <div className="flex gap-6 text-sm font-medium">
                <Link href="/" className="hover:text-sky-400  transition" > Inicio </Link>
                <Link href="#" className="hover:text-sky-400  transition" > Catalogo </Link>
                <Link href="#" className="hover:text-sky-400  transition" > Carrito </Link>
            </div>
        </nav>
    );
}