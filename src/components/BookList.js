import React from 'react'
import Modal from './Modal'

const BookList = (props) => {
    //console.log(props);
    const booksRes = props;
    console.log(booksRes);
    
    return (
        <div className="books">
            {props.books.map(book => 
                <div className="box-book">
                    <div className="book-image">
                        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt='Brak zdjęcia'></img>
                    </div>
                    <div className="book-info">
                        <h1>{ book.volumeInfo.title }</h1>
                        <h2>{ book.volumeInfo.authors }</h2>
                    </div>
                </div>
            )}
            <Modal modalBooks={ booksRes } />
        </div>
 
        
 
    )
}

export default BookList