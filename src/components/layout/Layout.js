// Layout.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../../styles/global.css';

export default function Layout({ children }) {
  return (
    <div className="max-w-screen-lg mx-auto "> {/* Añadí max-w-screen-lg y margin: auto */}
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
