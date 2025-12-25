import React from 'react';
import { NavLink } from 'react-router'; // React Router v7 style
import { FaHome, FaDownload, FaGithub } from "react-icons/fa";
import { FaGear, FaSpaghettiMonsterFlying, } from "react-icons/fa6"; // Using a gear for 'App' or 'Installation'
import { CiMenuBurger } from "react-icons/ci";
import { RiCloseLargeLine } from "react-icons/ri";
import { useState } from 'react';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // 1. Store the actual Component references in the array (not strings)
    const icons = [FaHome, FaGear, FaDownload];
    
    // 2. The text for the links
    const links = ['Home', 'App', 'Installation'];
     const ulList=<ul className=' block  md:flex  justify-center gap-8'>
        {
           icons.map((Icon,index)=>{
            const link=links[index];
    
                    return (
                        <li key={index}>
                            <NavLink 
                                // Create a path (e.g., /home, /app, /installation)
                                to={`/${link.toLowerCase()}`} 
                                className={({ isActive }) => 
                                    `flex items-center gap-2 text-xl transition-all ${
                                        isActive ? 'border-b-[3px]' : 'text-gray-600 hover:border-b-[3px]'
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
                className="lg:hidden cursor-pointer text-3xl flex items-center gap-5" 
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* 3. Conditional Rendering based on state */}
                {isOpen ? <RiCloseLargeLine  className='md:hidden'/> : <CiMenuBurger className='md:hidden'></CiMenuBurger> }
                <ul className={`bg-gray-500 pl-3 absolute pr-5 py-6 mx-10 rounded-2xl ${isOpen? 'top-20 left-5 duration-3000':' top-20 -left-200 duration-10000'}`}>
                    {
                    ulList
                    }
                </ul>
               <div className='w-[50px] h-[50px]'><img src='/src/assets/logo.png' alt="" /></div>
            </div>
           <NavLink to={'/home'}><div className=' hidden md:flex w-[50px] h-[50px]'><img src='/src/assets/logo.png' alt="" /></div></NavLink>  
       <div className='hidden md:flex'>
        {ulList}
       </div>
       <NavLink to='https://github.com/Mdikbalsarker/Assaignment-08'><button className='btn btn-primary'><FaGithub />Connect</button></NavLink>
        </nav>
    );
};

export default Navbar;