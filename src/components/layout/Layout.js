import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../../styles/global.css';
import 'aos/dist/aos.css';
import aos from 'aos';
import HeroSection from '../sections/HeroSection';

export default function Layout({ children }) {
  useEffect(() => {
    document.title = "Alan Galavis";
    aos.init({
      once: true,
    });
  }, []);

  return (
    <div >
      <Navbar />
      <HeroSection/>
      <div className="max-w-[1055px] mx-auto" data-aos="fade-up"  data-aos-duration="1000">{children}</div>
      <Footer />
    </div>
  );
}
