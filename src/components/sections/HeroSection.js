import React, { useEffect } from 'react';
import * as styles from '../../styles/hero.module.css';
import heroImageSVG from '../../images/hero.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import 'aos/dist/aos.css';
import aos from 'aos';

export default function HeroSection() {
  useEffect(() => {
    aos.init({
      once: true,
    });
  }, []);

  return (
    <section className="md:mt-14 items-center md:flex justify-center overflow-x-clip bg-[#22312E] md:pb-[136px]">
      <div className={`${styles.hero} md:px-20 py-10 text-center text-[#F3EED8] md:text-left items-center relative`}>
        <div data-aos="fade-up" data-aos-duration="1000">
          <div className="md:flex items-center relative">
            <div className="md:w-1/2 flex flex-col justify-center">
              <h1 className="py-4 text-5xl md:text-8xl text-[#F3EED8] italic">
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
              <img src={heroImageSVG} alt="alanegd" />
            </div>
          </div>

          <hr className="w-32 h-0.5 bg-[#D9D4C1] border-0 hidden md:block"></hr>
          
          <div className="flex py-4 items-center justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/alan-galavis/" className="text-3xl text-[#F3EED8] hover:text-[#172432]" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/alanegd" className="text-3xl text-[#F3EED8] hover:text-[#172432] ms-5" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:alangalavisjobs@gmail.com" className="text-3xl text-[#F3EED8] hover:text-[#172432] ms-5" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
