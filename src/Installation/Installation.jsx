import React from 'react';
import { useLoaderData } from 'react-router';
import Install from './Install';

const Installation = () => {
    const Data=useLoaderData();
   return (
        <div className='grid grid-cols-5 gap-5'>
            {Data.Apps.map((product) => <Install key={product.id} product={product}></Install>)}
        </div>
    );
};

export default Installation;