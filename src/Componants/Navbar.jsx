import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/img/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { id: 1, text: 'Home', key: '/' },
        { id: 2, text: 'About Us', key: '/about' },
        { id: 3, text: 'Products', key: '/products' },
        { id: 4, text: 'Clientele', key: '/clientele' },
        { id: 5, text: 'Accreditations', key: '/accreditations' },
        { id: 7, text: 'Gallery', key: '/gallery' },
        { id: 6, text: 'Career', key: '/career' },
        { id: 8, text: 'Contact Us', key: '/contact' },
    ];

    return (
        <div className='sticky top-0 z-50 bg-white flex justify-between items-center mx-auto px-10 py-4'>
            {/* Logo */}
            <Link to='/'>
                <img src={logo} className='w-24' alt="Logo" />
            </Link>

            {/* Desktop Navigation */}
            <ul className='hidden md:flex md:gap-4'>
                {navItems.map(item => (
                    <NavLink
                        to={item.key}
                        key={item.id}
                        className={({ isActive }) =>
                            `px-3 py-2 rounded-md cursor-pointer duration-300 text-lg font-semibold ${
                                isActive ? 'text-[#F46100]' : 'text-black hover:text-[#F46100]'
                            }`
                        }
                    >
                        {item.text}
                    </NavLink>
                ))}
            </ul>

            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={26} className='cursor-pointer' /> : <AiOutlineMenu size={26} className='cursor-pointer' />}
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                    nav
                        ? 'fixed md:hidden right-0 top-20 w-full h-full border-r border-r-gray-900 bg-white ease-in-out duration-300 p-4 space-y-4'
                        : 'ease-in-out w-full fixed top-20 bottom-0 right-[-100%]'
                }
            >
                {navItems.map(item => (
                    <NavLink
                        to={item.key}
                        key={item.id}
                        onClick={() => setNav(false)}
                        className={({ isActive }) =>
                            `block p-4 my-3 border-b rounded-xl duration-300 font-semibold text-lg border-gray-300 ${
                                isActive ? 'bg-[#F46100] text-white' : 'hover:bg-[#F46100] hover:text-white text-black'
                            }`
                        }
                    >
                        {item.text}
                    </NavLink>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
