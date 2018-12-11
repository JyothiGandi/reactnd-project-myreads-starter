/**
 * Created by Jyothi(@gandj) on 01/12/18
 */

import React from "react";
import PropTypes from 'prop-types';

class Book extends  React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
  };

  render() {
    const { book, onMovingSelf } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={(book.imageLinks) ? { width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` } : { width: 128, height: 193}}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf || 'none'} onChange={(event) => {onMovingSelf(book, event.target.value)}}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors.toString()}</div>
      </div>
    )
  }
}

export default Book;
