import React from 'react';
import { useLoaderData } from 'react-router';
import Install from './Install';

const Installation = () => {
    const Data=useLoaderData();
    
   return (
    <div>
    <div className='mx-auto bg-slate-200 text-center pb-5'>
        <h3 className='text-3xl'>Our all Application </h3>
        <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, animi.</p>
    </div>
    <div className='mx-auto flex justify-between px-10 bg-slate-200'>
        <div><h3>Total Apps({Data.Apps.length})</h3></div>
        <div><input className='w-[300px] border-2 border-black p-2 rounded-3xl' placeholder='enter your code here'></input></div>
    </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
            {Data.Apps.map((product) =><Install key={product.id} product={product}></Install>)}
        </div>
        </div>
    );
};

export default Installation;