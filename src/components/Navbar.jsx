import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../style';
import { navLinks } from '../constants/index';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-gradient-to-r from-gray-900/80 to-gray-700/80 backdrop-blur-lg shadow-md`}>
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Logo + Nama */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          {/* Logo Bulat */}
          <img className="w-10 h-10 object-cover rounded-full border-2 border-white" src={logo} alt="Logo" />
          <p className="text-white flex cursor-pointer text-[18px] font-bold">
            AF Profile &nbsp;<span className="sm:block hidden"></span>
          </p>
        </Link>

        {/* Navbar Desktop */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-blue-400' : 'text-gray-300'
              } hover:text-blue-400 text-[18px] font-medium cursor-pointer transition duration-300`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Navbar Mobile */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="Menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 bg-gradient-to-b from-gray-800/90 to-gray-700/90 backdrop-blur-lg shadow-lg absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-blue-400' : 'text-gray-300'
                  } font-medium cursor-pointer text-[16px] hover:text-blue-400 transition duration-300`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
