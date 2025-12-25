import React from 'react';
import {Link} from 'react-router'

const Install = ({product}) => {
    const {id,title,imageUrl,salePrice,order,rating}=product;
    console.log(product);
    return (
        <div>
            <Link to={`/productDetails/${id}`}><div className="flex flex-col  border-2 bg-slate-600 rounded-xl text-white overflow-hidden shadow-lg">
                 <h3 className='bg-slate-200 flex-1 text-xl p-2 text-black'>{title}</h3>
                    <img className='h-[150px] w-[150px] mx-auto ' src={imageUrl}/>
                    <div className='p-3'>
                        <h3>{salePrice}</h3>
                    <p>By: {order}</p>
                    <span>Rating: ⭐ {rating}</span>
                    </div>
                </div></Link>
        </div>
    );
};

export default Install;