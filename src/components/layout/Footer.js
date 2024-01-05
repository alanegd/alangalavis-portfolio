import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../../styles/footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="w-full p-4">
        <div className="max-w-screen-lg container mx-auto px-4 flex flex-wrap justify-between items-baseline text-[#D9D4C1]">
          <h2 className="font-bold flex py-2 whitespace-nowrap items-center text-xl">alanegd</h2>

          <div className=" flex md:mt-4 gap-x-5">
            <a href="https://www.linkedin.com/in/alan-galavis/" className="text-2xl text-[#D9D4C1] hover:text-white" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin}/>
            </a>
            <a href="https://github.com/alanegd" className="text-2xl text-[#D9D4C1] hover:text-white ms-5" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub}/>
            </a>
            <a href="mailto:alangalavisjobs@gmail.com" className="text-2xl text-[#D9D4C1] hover:text-white ms-5" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope}/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
