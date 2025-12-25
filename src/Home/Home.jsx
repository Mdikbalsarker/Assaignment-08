import React from 'react';
import Installation from '../Installation/Installation';
import { Link, NavLink, useLoaderData } from 'react-router';
import Banner from '../Banner/Banner';
import UserCounter from '../UserCounter/UserCounter';

const Home = () => {
    const appData=useLoaderData();
    
    
    return (
        <div >
            <div>
                <Banner></Banner>
            </div>
            <div><UserCounter></UserCounter></div>
        <div className='flex  w-11/12 mx-auto items-center my-10'>
            <div  className='mx-auto justify-center items-center '>
            <div className='text-center p-10'>
                <h1 className='text-3xl'>Trending Apps</h1>
                <p className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, sint.</p>
            </div>
            <div className='w-full justify-center items-center my-10'>
             <div className='grid grid-cols-2 md:grid-cols-4   items-center gap-3'>
               {appData.Apps.slice(0, 8).map((app) => (
                <Link to={`/productDetails/${app.id}`}>
                    <div key={app.id} className="flex flex-col h-full border-2 bg-slate-600 rounded-xl text-white overflow-hidden shadow-lg">
                    <div><h1 className='text-xl bg-slate-400'>{app.title}</h1> <img className='w-full h-[150px] text-center mx-auto p-4 rounded-xl' src={app.imageUrl} alt="" /></div>
                    <h3 className='flex-grow'> Developed By:{app.order}</h3>
                    <p>Purpose: {app.category}</p>
                    <span>Rating: ⭐ {app.rating}</span>
                </div>
                </Link>
                
            ))}
            
         </div>
         <div className='mx-auto text-center py-3 '><NavLink to={'/app'}><button className='btn btn-primary px-7 text-2xl mx-auto'>Show All</button></NavLink>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Home;