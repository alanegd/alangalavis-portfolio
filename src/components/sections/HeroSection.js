import React from 'react';
import * as styles from '../../styles/hero.module.css';
import heroImageSVG from '../../images/hero.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import 'aos/dist/aos.css';


export default function HeroSection() {
  return (
    <section className="md:my-16 items-center md:flex justify-center overflow-x-clip">
    <div
      className={`${styles.hero} md:px-20 py-10 text-center text-[#D9D4C1] md:text-left items-center relative`}>
      <div className="md:flex items-center relative">
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-5xl md:text-8xl font-semibold md:font-normal text-[#1E1E1E] md:italic py-4">
            Alan <br className="hidden md:block" /> Galavis
          </h1>
          <p className="py-4 md:hidden">
            Ingeniero de software.
          </p>
          <p className="py-4 hidden md:block">
            Ingeniero de software especializado en proyectos full stack y frameworks ágiles.
          </p>
        </div>
          
        <div className="hidden md:block md:w-1/2 absolute top-1/2 right-0 transform -translate-y-1/2">
          <img src={heroImageSVG} alt="alanegd" class=""/>
        </div>
      </div>

        <hr className="w-32 h-0.5 bg-[#D9D4C1]  border-0 hidden md:block"></hr>
        
        <div className="flex py-4 items-center justify-center md:justify-start">
          <a href="https://www.linkedin.com/in/alan-galavis/" className="text-3xl text-[#D9D4C1]  hover:text-[#172432]" target="_blank" rel="noopener noreferrer" alt="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/alanegd" className="text-3xl text-[#D9D4C1]  hover:text-[#172432] ms-5" target="_blank" rel="noopener noreferrer" alt="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:alangalavisjobs@gmail.com" className="text-3xl text-[#D9D4C1]  hover:text-[#172432] ms-5" target="_blank" rel="noopener noreferrer" alt="Instagram">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </section>
  );
}
