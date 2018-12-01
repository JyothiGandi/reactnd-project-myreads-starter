/**
 * Created by Jyothi(@gandj) on 01/12/18
 */

import React from "react";
import PropTypes from 'prop-types';
import Book from './Book'

class BooksGrid extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  };

  render() {
    const { books } = this.props;

    return (
      <ol className="books-grid">
        {
          books.map(book => <li key={book.id}>
            <Book book={book}/>
          </li>)
        }
      </ol>
    )
  }
}

export default BooksGrid;