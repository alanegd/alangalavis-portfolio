import { Link } from 'gatsby'
import * as styles from '../../styles/navbar.module.css'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`${styles.navbar}`}>
      <nav class="flex flex-wrap items-center justify-between align-middle p-4 mb-8">
        <div class="container mx-auto flex flex-wrap items-center justify-between text-white">
          <div class="w-full relative flex justify-between md:w-auto px-4 md:static md:block md:justify-start">
            <Link class="font-semibold flex py-2 whitespace-nowrap items-center">
              <h1 class="text-xl">alanegd</h1>
            </Link>
            
            <button class="md:hidden" onClick={toggleMenu}>
              <FontAwesomeIcon icon={showMenu ? faClose : faBars}/>
            </button>
          </div>
          
          <div className={`md:flex md:flex-grow items-center ${showMenu ? 'flex w-full justify-end' : 'hidden'}`}>
            <ul className="flex flex-col md:flex-row list-none md:ml-auto gap-x-4 lg:gap-x-8">
              <li>
                <Link to="/">
                    <p class="hover:text-[#EBB073] mt-3 md:mt-auto">Acerca de mí</p>
                </Link>
              </li>
              <li>
                <Link to="/">
                    <p class="hover:text-[#EBB073] mt-3 md:mt-auto">Proyectos</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
