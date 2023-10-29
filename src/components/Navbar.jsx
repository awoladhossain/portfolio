/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Avatar } from "@nextui-org/react";
import Logo from '../assets/Screenshot 2023-10-29 032400.png'
import { AiOutlineBars, AiOutlineClose, AiOutlineLinkedin, AiOutlineMail, AiOutlineGithub, AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-scroll';
const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => {
        setNav(!nav)
    }
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <Avatar src={Logo} className="w-20 h-20 text-large mt-2" />
            </div>
            {/* menu bar */}
            <ul className='hidden md:flex'>
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
                        Work
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* meanu bar */}

            <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
                {
                    !nav ? <AiOutlineBars /> : <AiOutlineClose />
                }
            </div>

            {/* mobile menu */}
            <ul className={
                !nav
                    ? 'hidden'
                    : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
            }>
                <li className='py-4 text-2xl' >
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-4 text-2xl' >
                    {' '}
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-4 text-2xl' >
                    {' '}
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-4 text-2xl' >
                    {' '}
                    <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-4 text-2xl' >
                    {' '}
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* social media */}
            <div className='hidden lg:flex fixed top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-emerald-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/"> LinkedIn <AiOutlineLinkedin size={30}/> </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/"> GitHub <AiOutlineGithub size={30}/> </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/"> Mail <AiOutlineMail size={30}/> </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300  bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/"> Resume <AiOutlineUser size={30}/> </a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;