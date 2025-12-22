import React from 'react';
import Installation from '../Installation/Installation';
import { useLoaderData } from 'react-router';

const Home = () => {
    const bookData=useLoaderData();
    
    return (
        <div>
            <Installation bookData={bookData}></Installation>
         <div className='flex gap-3 '>
               {bookData.books.map((book) => (
                <div key={book.id} className="book-card border-2 bg-slate-600 rounded-xl text-white" style={{ border: '1px solid #ddd', padding: '10px', width: '200px' }}>
                    <img src={book.cover_image} alt={book.title} style={{ width: '100%', height: 'auto' }} />
                    <h3>{book.title}</h3>
                    <p>By: {book.author}</p>
                    <span>Rating: ⭐ {book.rating}</span>
                </div>
            ))}
         </div>
        </div>
    );
};

export default Home;