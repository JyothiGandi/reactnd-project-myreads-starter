/**
 * Created by Jyothi Gandi on 10/12/18
 */

 import React from "react";
 import PropTypes from 'prop-types';
 import BooksGrid from './BooksGrid';

 class BookShelf extends React.Component {
   static propTypes = {
     books: PropTypes.array.isRequired,
     title: PropTypes.string.isRequired,
     shelf: PropTypes.string.isRequired,
     moveShelf: PropTypes.func.isRequired,
   };

   render() {
     const { books, title, shelf, moveShelf } = this.props;
     return (
       <div className="bookshelf">
         <h2 className="bookshelf-title">{title}</h2>
         <div className="bookshelf-books">
           <BooksGrid books={books.filter(book => book.shelf === shelf)} onMovingSelf={moveShelf}/>
         </div>
       </div>
     )
   }
 }

 export default BookShelf;
