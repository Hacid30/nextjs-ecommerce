export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-6 text-center border-t border-slate-800 text-sm">
        <p>© {new Date().getFullYear()} NextShop. Todos los derechos reservados.</p>
        </footer>
    );
}