import React, { useState, useEffect  } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import * as styles from '../../styles/navbar.module.css';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.navbar} ${scrolling ? styles.shadow : ''}`}>
      <nav className="flex flex-wrap items-center justify-between align-middle p-4">
        <div className="max-w-screen-lg container mx-auto py-2 px-4 md:px-0 flex flex-wrap items-center justify-between text-[#D9D4C1]">
          <div className="w-full relative flex justify-between md:w-auto md:px-0 md:static md:block md:justify-start">
            <Link className="font-semibold flex whitespace-nowrap items-center" to="/">
              <h2 className="text-xl">alanegd</h2>
            </Link>

            <button className="md:hidden text-xl" onClick={toggleMenu} aria-label="Open/Close navbar">
              <FontAwesomeIcon icon={showMenu ? faClose : faBars} />
            </button>
          </div>

          <div className={`md:flex md:flex-grow items-center ${styles.dropdown} ${showMenu ? styles.open : ''}`}>
            <ul className="flex flex-col md:flex-row list-none md:ml-auto gap-x-4 md:gap-x-16">
              <li>
                <Link to="#about">
                  <h2 className="hover:text-white mt-3 md:mt-auto">Acerca de mí</h2>
                </Link>
              </li>
              <li>
                <Link to="#projects">
                  <h2 className="hover:text-white mt-3 md:mt-auto">Proyectos</h2>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
