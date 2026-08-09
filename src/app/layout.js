import  Navbar from "../components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-slate-900">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
