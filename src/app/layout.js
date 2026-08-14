import "./globals.css";
import  Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

export const metadata = {
  title: 'MiTienda',
  description: 'E-commerce con Next.js y Zustand'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-slate-900 min-h-screen flex flex-col justify-between">
        <Providers>
          <Navbar />
            <div className="grow">
              {children}
            </div>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
