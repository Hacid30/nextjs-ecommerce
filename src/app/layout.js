import  Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-slate-900 min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="grow">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
