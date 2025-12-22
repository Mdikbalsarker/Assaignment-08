import React from 'react';
import { useLoaderData } from 'react-router';

const Installation = () => {
    const bookData=useLoaderData();
   return (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {bookData.books.map((book) => (
                <div key={book.id} className="book-card" style={{ border: '1px solid #ddd', padding: '10px', width: '200px' }}>
                    <img src={book.cover_image} alt={book.title} style={{ width: '100%', height: 'auto' }} />
                    <h3>{book.title}</h3>
                    <p>By: {book.author}</p>
                    <span>Rating: ⭐ {book.rating}</span>
                </div>
            ))}
        </div>
    );
};

export default Installation;