import React from 'react';
import { NavLink } from 'react-router'; // React Router v7 style
import { FaHome, FaDownload, FaGithub } from "react-icons/fa";
import { FaCableCar, FaGear } from "react-icons/fa6"; // Using a gear for 'App' or 'Installation'
import { CiMenuBurger } from "react-icons/ci";
import { RiCloseLargeLine } from "react-icons/ri";
import { useState } from 'react';
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // 1. Store the actual Component references in the array (not strings)
    const icons = [FaHome, FaGear, FaDownload , FaCableCar ,];
    
    // 2. The text for the links
    const links = ['Home', 'App', 'Installation','SinoExpress'];
     const ulList=<ul className='flex justify-center gap-8'>
        {
           icons.map((Icon,index)=>{
            const link=links[index];
    
                    return (
                        <li key={index}>
                            <NavLink 
                                // Create a path (e.g., /home, /app, /installation)
                                to={`/${link.toLowerCase()}`} 
                                className={({ isActive }) => 
                                    `flex ${isActive}?'block':'flex'
                                    }`
                                }
                            >
                                <Icon />
                                <span>{link}</span>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
            

    return (
        <nav className='bg-gray-100 py-3 flex justify-between px-3'>
            <div 
                className="lg:hidden cursor-pointer text-3xl" 
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* 3. Conditional Rendering based on state */}
                {isOpen ? <RiCloseLargeLine  className='md:hidden'/> : <CiMenuBurger className='md:hidden'></CiMenuBurger> }
               <ul>
                {
                    ulList
                }
               </ul>
            </div>
            <div className='w-[50px] h-[50px]'><img src='/src/assets/logo.png' alt="" /></div>
       <div className='hidden md:flex'>
        {ulList}
       </div>
       <button className='btn btn-primary'><FaGithub />Connect</button>
        </nav>
    );
};

export default NavBar;