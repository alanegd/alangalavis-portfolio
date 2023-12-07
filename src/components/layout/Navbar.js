import { Link } from 'gatsby'
import * as styles from '../../styles/navbar.module.css'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
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
    <div className={`${styles.navbar} ${scrolling ? styles.scrolled : ''}`}>
      <nav class="flex flex-wrap items-center justify-between align-middle p-4">
        <div class="container mx-auto flex flex-wrap items-center justify-between">
          <div class="w-full relative flex justify-between md:w-auto px-4 md:static md:block md:justify-start">
            <Link class="font-bold flex py-2 whitespace-nowrap items-center">
              <h1 class="text-xl">Alan Galavis</h1>
            </Link>
            
            <button class="md:hidden" onClick={toggleMenu}>
              <FontAwesomeIcon icon={showMenu ? faClose : faBars}/>
            </button>
          </div>
          
          <div className={`md:flex md:flex-grow items-center ${showMenu ? 'flex w-full justify-end' : 'hidden'}`}>
            <ul className="flex flex-col md:flex-row list-none md:ml-auto gap-x-4 lg:gap-x-8">
              <li>
                <Link to="/">
                    <p class="hover:text-[#ec5f4d]">About</p>
                </Link>
              </li>
              <li>
                <Link to="/">
                    <p class="hover:text-[#ec5f4d]">Projects</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
