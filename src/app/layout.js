import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BlogProvider } from '../context/BlogContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ahsan Ali Soomro',
  description: 'Frontend web developer',
  icon: '/favicon.ico',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ahsan Ali Soomro",
              "url": "https://ahsanalisoomro.vercel.app",
              "image": "https://ahsanalisoomro.vercel.app/ahsan-ali-soomro.jpg",
              "jobTitle": "Frontend Web Developer",
              "sameAs": [
                "https://www.linkedin.com/in/your-linkedin-id",
                "https://github.com/your-github-id"
              ]
            }),
          }}
        />
      </head>
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
