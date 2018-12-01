/**
 * Created by Jyothi(@gandj) on 01/12/18
 */
import React from 'react';
import {Link} from "react-router-dom";
import * as BooksAPI from './BooksAPI';
import BooksGrid from './BooksGrid';

class Search extends React.Component {
  state = {
    query: '',
    searchResults : [],
  };

  updateQuery = (query) => {
    this.setState({query});
    if(query !== '') {
      BooksAPI.search(query)
        .then(data => {
          if(Array.isArray(data)) {
            this.setState({searchResults: data});
          } else {
            this.setState({searchResults: []});
          }
        });
    } else {
      this.setState({searchResults: []});
    }
  };

  render() {
    const { query, searchResults } = this.state;
    const { onMovingSelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={'/'}>
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input type="text"
                   placeholder="Search by title or author"
                   value={query}
                   onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid books={searchResults} onMovingSelf={onMovingSelf}/>
        </div>
      </div>
    )
  }
}

export default Search;