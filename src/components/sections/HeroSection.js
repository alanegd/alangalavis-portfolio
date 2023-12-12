import React from 'react';
import * as styles from '../../styles/hero.module.css';
import heroImageSVG from '../../images/hero.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function HeroSection() {
  return (
    <section className={`${styles.hero} text-white p-20 md:py-10 mt-10 text-center md:text-left items-center relative`}>
      <div className="md:flex md:justify-between items-center relative">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-8xl font-semibold md:font-normal py-4">Alan <br className="hidden md:block" /> Galavis</h1>
          <p className="py-4 md:hidden">Ingeniero de software.</p>
          <p className="py-4 hidden md:block">Ingeniero de software especializado en proyectos full stack y frameworks ágiles.</p>
        </div>

        <div className="md:w-1/2 hidden md:block">
          <img
            src={heroImageSVG}
            alt="Alan Galavis"
            width="500"
            height="50"
          />
        </div>
      </div>

      <div className="flex items-center justify-center md:justify-start">
        <hr className="w-32 h-2 bg-[#EBB073] border-0 hidden md:block"></hr>
      </div>

      <div className="flex py-4 items-center justify-center md:justify-start">
        <a href="https://www.linkedin.com/in/alan-galavis/" className="text-3xl text-white hover:text-[#ec5f4d]" alt="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/alanegd" className="text-3xl text-white hover:text-[#ec5f4d] ms-5" alt="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="mailto:alangalavisjobs@gmail.com" className="text-3xl text-white hover:text-[#ec5f4d] ms-5" alt="Instagram">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </section>
  );
}
