import './globals.css';
import { ReactNode } from 'react';
import Navbar from '../components/nav/Navbar'; // Import the Navbar client component
import { ThemeProvider } from '../context/ThemeContext';
import { NavbarLayoutProvider } from '../context/NavbarLayoutContext';
import Footer from '../components/Footer';
// import Head from 'next/head';
// import Navbar from './Navbar';

export const metadata = {
  title: 'Vinay Danepalli',
  description: 'A professional portfolio of Vinay Danepalli (vdanepalli) - vdanepalli@gmail.com',
  icons: {
    icon: '/favicon.ico', // Path to your favicon
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      {/* <Head>
        <title>Vinay Danepalli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <body className="bg-custom-gradient text-white font-sans min-h-screen flex flex-col">
        <NavbarLayoutProvider>
          <ThemeProvider>
            {/* Navbar is imported here */}
            <Navbar />
            <main className='mt-16'>{children}</main>
                  {/* Footer Toggle Button */}
            <Footer/>
          </ThemeProvider>
        </NavbarLayoutProvider>
      </body>
    </html>
  );
}