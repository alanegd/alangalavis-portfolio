import React from 'react';
import * as styles from '../../styles/hero.module.css';
import heroImageSVG from '../../images/hero.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function HeroSection() {
  return (
    <section className={`${styles.hero} p-10 md:px-20 md:py-10 mt-10 text-center text-white md:text-left items-center relative`}>
      <div className="md:flex items-center relative">
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-5xl md:text-8xl font-semibold md:font-normal py-4">Alan <br className="hidden md:block" /> Galavis</h1>
          <p className="py-4 md:hidden">Ingeniero de software.</p>
          <p className="py-4 hidden md:block">
            <span className="text-[#EBB073]">Ingeniero de software</span> especializado en proyectos 
            <span className="text-[#EBB073]"> full stack</span> y <span className="text-[#EBB073]">frameworks ágiles</span>.
          </p>
        </div>
        <div className="hidden md:block md:w-1/2 absolute top-1/2 right-0 transform -translate-y-1/2">
          <img src={heroImageSVG} alt="Hero Image"/>
        </div>
      </div>

      <div className="flex items-center justify-center md:justify-start mt-4">
        <hr className="w-32 h-2 bg-[#EBB073] border-0 hidden md:block"></hr>
      </div>

      <div className="flex py-4 items-center justify-center md:justify-start">
        <a href="https://www.linkedin.com/in/alan-galavis/" className="text-3xl text-white hover:text-[#EBB073]" alt="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/alanegd" className="text-3xl text-white hover:text-[#EBB073] ms-5" alt="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="mailto:alangalavisjobs@gmail.com" className="text-3xl text-white hover:text-[#EBB073] ms-5" alt="Instagram">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </section>
  );
}
