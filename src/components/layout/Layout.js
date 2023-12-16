import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../../styles/global.css';

export default function Layout({ children }) {
  useEffect(() => {
    document.title = "Alan Galavis";
  }, []);

  return (
    <div >
      <Navbar />
      <div className="max-w-screen-lg mx-auto">{children}</div>
      <Footer />
    </div>
  );
}
