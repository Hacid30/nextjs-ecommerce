import  Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-slate-900">
        <Navbar/>
        <div className="flex-grow">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
