import React from 'react';

const Install = ({product}) => {
    const {title,imageUrl,salePrice,order,rating}=product;
    console.log(product);
    return (
        <div>
            <div key={title}  className="flex flex-col h-full border-2 bg-slate-600 rounded-xl text-white overflow-hidden shadow-lg">
                    <img src={imageUrl}/>
                    <h3>{salePrice}</h3>
                    <p>By: {order}</p>
                    <span>Rating: ⭐ {rating}</span>
                </div>
        </div>
    );
};

export default Install;