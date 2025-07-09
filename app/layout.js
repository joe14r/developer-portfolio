import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import dynamic from "next/dynamic";
import ClientOnlyLayout from "./components/ClientOnlyLayout";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Youssef Arafat - Software Developer",
  description:
    "This is the portfolio of Youssef Arafat. Quick-learning self-taught developer focused on frontend/Applications development. Open to new challenges and enjoy working with others to bring creative solutions to life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
        <ClientOnlyLayout gtmId={process.env.NEXT_PUBLIC_GTM} />
      </body>
    </html>
  );
}
