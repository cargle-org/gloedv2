import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import Button from '../UI/Button';
import Logo from '../../assets/svgs/Logo';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Courses', href: '' },
  { label: '1:1', href: '' },
  { label: 'Community', href: '' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="font-plus-jakarta-sans h-18 md:h-[100px] border-none border-[#00000029] filter drop-shadow-sm fixed top-0 left-0 w-full bg-white z-50">
      <nav className="flex items-center justify-between xl:justify-around container-none mx-3 py-4 md:py-8 gap-4">
        {/* Logo or title */}
        <div className="flex items-start justify-start cursor-pointer">
          <div className="flex justify-between items-center"></div>
          <Link to="/">
            <Logo />
          </Link>

          <div className='hidden lg:flex items-center justify-center mx-[72px] xl:mx-[177px] gap-3 lg:gap-6 2xl:gap-10 text-[#040815] text-justify font-medium text-xs xl:text-base 2xl:text-lg tracking-[-0.36px] leading-[27px] cursor-pointer'>
            <div className=" hover:underline hover:underline-offset-4 hover:text-primary-dark">
              Courses
            </div>
            <div className=" hover:underline hover:underline-offset-4 hover:text-primary-dark">
              1:1 Classes
            </div>
            <div className=' hover:underline hover:underline-offset-4 hover:text-primary-dark'>
              Community
            </div>
          </div>
        </div>

        <div className='hidden md:flex'>
          <div className="inline-flex items-center md:gap-3 2xl:gap-8">
            <div className="text-[#596780] tracking-[-0.36px] leading-[27px] text-sm sm:text-base xl:text-lg w-[47px] cursor-pointer hover:underline hover:underline-offset-4 hover:text-primary">
              Login
            </div>
            <div className="">
              <Button variant='primary' className='md:text-[13px] lg:text-sm xl:text-base'>
                Create an account
              </Button>
            </div>
          </div>
        </div>
        {/* Hamburger button */}
        <button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden"
          onClick={toggleMenu}>
          {!isOpen ? <RiMenu3Fill className='w-5 h-5' /> : <IoClose className='w-5 h-5' />}
        </button>
      </nav>

      {/* Navigation Menu */}
      <div className=
        {`${isOpen
          ? 'block absolute top-full left-0 w-full bg-white z-40'
          : 'hidden'} overflow-hidden transition-all duration-200 ease-in-out`
        }
      >
        <div className="inline-flex container justify-center items-center gap-8 mx-0 py-4 border-y border-primary">
          <div className="text-[#596780] underline tracking-[-0.36px] leading-[27px] text-lg w-[47px]">
            Login
          </div>
          <div className='text-primary underline '>
            Create an account
          </div>
        </div>
        <ul className="container mx-auto px-12 py-4 text-lg text-primary font-medium border border-gray-200">
          {navItems.map((item) => (
            <li key={item.href} className="mb-4 ml-3 hover:border-b hover:text-primary">
              <Link to={item.href} className="block underline-offset-1">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;