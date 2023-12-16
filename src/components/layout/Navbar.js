import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import * as styles from '../../styles/navbar.module.css';
import '../../styles/dropDown.css';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`${styles.navbar}`}>
      <nav className="flex flex-wrap items-center justify-between align-middle p-4">
        <div className="max-w-screen-lg container mx-auto py-2 px-4 flex flex-wrap items-center justify-between text-white">
          <div className="w-full relative flex justify-between md:w-auto md:px-0 md:static md:block md:justify-start">
            <Link className="font-semibold flex whitespace-nowrap items-center" to="/">
              <h1 className="text-xl">alanegd</h1>
            </Link>

            <button className="md:hidden text-xl" onClick={toggleMenu}>
              <FontAwesomeIcon icon={showMenu ? faClose : faBars} />
            </button>
          </div>

          <div className={`md:flex md:flex-grow items-center dropdown ${showMenu ? 'open' : ''}`}>
            <ul className="flex flex-col md:flex-row list-none md:ml-auto gap-x-4 lg:gap-x-8">
              <li>
                <Link to="#about">
                  <p className="hover:text-[#EBB073] mt-3 md:mt-auto">Acerca de mí</p>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <p className="hover:text-[#EBB073] mt-3 md:mt-auto">Proyectos</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
