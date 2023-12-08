import React, { useState, useEffect } from 'react';
import Loader from './Loader';


export default function Result({books, setBooksData}) {

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 200)
    }, [books])

    const handleBackButton = (e) => {
        e.preventDefault();
        setBooksData([])
    }

    return (
        <>
        {isLoading ? 
        (<Loader />) : 
        (
            <div className="container mx-auto my-8">
                <button 
                onClick={handleBackButton}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 mb-5 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                >
                    Back
                </button>

                {books ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {books.map((book) => (
                            <div key={book.id} className="bg-white p-4 rounded-md shadow-md">
                                <img
                                    src={book.imageUrl}
                                    alt={book.title}
                                    className="w-full h-40 object-cover mb-4 rounded-md xl:h-60"
                                />
                                <h3 className="text-lg font-bold">{book.title}</h3>
                                <p className="text-gray-400 text-xs italic mb-2">{book.genre}</p>
                                <p className="text-gray-600 text-sm mb-2">~{book.author}</p>
                                <p className="text-gray-500 text-xs">{book.publishedDate}</p>

                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No books found for the selected options.</p>
                )}
            </div>
        )}
        </>
    );
}
