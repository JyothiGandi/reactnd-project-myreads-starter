import React from 'react';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookShelf from './BookShelf';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    books : []
  };

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState({ books });
  }

  moveBookTo = (book, shelf) => {
    BooksAPI.update(book, shelf);
    book.shelf = shelf;

    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat(book),
    }));
  };

  render() {
    const { books } = this.state;
    const shelves = [
      {
        title: 'Currently Reading',
        shelf: 'currentlyReading',
      },
      {
        title: 'Read',
        shelf: 'read',
      },
      {
        title: 'Want to Read',
        shelf: 'wantToRead',
      },
    ];
    return (
      <div className="app">

        <Route exact path={'/'}
               render={() => (
                 <div className="list-books">
                   <div className="list-books-title">
                     <h1>MyReads</h1>
                   </div>
                   <div className="list-books-content">
                     <div>
                     {
                       shelves.map(e => <BookShelf books={books} title={e.title} shelf={e.shelf} moveShelf={this.moveBookTo} />)
                     }
                     </div>
                   </div>
                   <div className="open-search">
                     <Link to={'/search'}>
                       <button>Add a book</button>
                     </Link>
                   </div>
                 </div>
               )}
        />
        <Route path={'/search'}
               render={() => (
                 <Search onMovingSelf={this.moveBookTo}/>
               )}
        />
      </div>
    )
  }
}

export default BooksApp
