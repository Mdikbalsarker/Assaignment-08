import React from 'react';
import { BiLogoPlayStore } from 'react-icons/bi';
import { FaAppStore } from 'react-icons/fa';
import { NavLink } from 'react-router';
import hero from '../assets/hero.png'

const Banner = () => {
    return (
        <div>
            <div className='bg-slate-300 h-auto'>
                <div className='justify-center items-center text-center w-2/3 mx-auto '>
                    <h1 className='text-6xl'>We Build </h1>
                    <h1 className='text-6xl'><span className='text-violet-500 '>Productive</span> Apps</h1>
                    <h3 className=' p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur recusandae corporis blanditiis quia aspernatur, qui vero explicabo enim minus mollitia asperiores itaque vel voluptatum harum cumque delectus doloribus architecto iure similique quibusdam? Ratione explicabo aperiam vel rem. Aspernatur, debitis.</h3>
                    <div className='flex gap-2 text-center justify-center p-4'>
                        <button className='flex border-1 bg-violet-200 items-center text-center p-1 rounded-xl' ><BiLogoPlayStore className='text-2xl'></BiLogoPlayStore>PlayStore</button>
                    <NavLink to={'https://www.apple.com/sa/'}><button className='flex border-1 bg-violet-200 items-center text-center p-1 rounded-xl' ><FaAppStore className='text-2xl text-blue-400'></FaAppStore>AppStore</button></NavLink>
                    </div>
                    <div><img src={hero} alt="" /></div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;