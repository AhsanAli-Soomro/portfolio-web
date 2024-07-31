import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BlogProvider } from "./context/BlogContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahsan Ali Soomro",
  description: "Frontent web developer",
  icone: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BlogProvider>
          <Navbar />
          {children}
          <Footer />
        </BlogProvider>
      </body>
    </html>
  );
}
