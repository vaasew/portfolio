import React, { useState } from 'react';
import useReadingProgress from '../hooks/useReadingProgress';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const completion=useReadingProgress();

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#433039] text-gray-300 z-10">
      <div>
      <div className='lg:hidden flex'>
        <ul className="flex">
          <li className='w-auto h-[45px] flex justify-between items-center' title="Linkedin">
            <a target="_blank"
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/siddharthan-dileep-a513951b9/'
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-auto h-[45px] flex justify-between items-center' title="Github">
            <a target="_blank"
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/vaasew'
            >
              <FaGithub size={30} />
            </a>
          </li>
     
          <li className='w-auto h-[45px] flex justify-between items-center' title="Resume">
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
             <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
      </div>

      {/* menu */}
      <ul className='hidden lg:flex list'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='lg:hidden z-20 cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#592a3b] flex flex-col justify-center z-10 items-center'
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a target="_blank"
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/siddharthan-dileep-a513951b9/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a target="_blank"
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/vaasew'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a target="_blank"
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
      <span style={{transform:`translateX(${completion-101.4}%)`}} className="absolute bg-pink-500 h-[1px] w-full bottom-0"></span>
    </div>
  );
};

export default Navbar;