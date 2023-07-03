'use client';

import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import './globals.css';

// export const metadata = {
//   title: 'GIA Stocks',
//   description:
//     'Bringing Indian Corporates to Investors. An Investor Relations Company',
// };

export default function RootLayout({ children }) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <header>
          <Header />
        </header>
        <div className="grid grid-cols-4 ">
          <nav className={`${isNavbarOpen ? 'xs:z-10  sm:col-span-1  ' : ''}`}>
            <Navbar
              setIsNavbarOpen={setIsNavbarOpen}
              isNavbarOpen={isNavbarOpen}
            />
          </nav>
          <main
            className={`mt-[65px] 
             ${isNavbarOpen ? 'sm:col-span-3 xs:col-span-4' : 'col-span-4'}
             ml-${isNavbarOpen ? '8' : '10'}
             transition-all duration-500 ease-in-out
            `}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
