import React, { Component } from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks';
import Book from './Book';

class App extends Component {
    state = {
        books: [],
        showSearchPage: true
    }
    componentDidMount()  {
        BooksAPI.getAll().then((books) => this.setState({books}))
    }

    render() {
    return (
      <div className="App">
          <div className="app">
              {this.state.showSearchPage ? (
                      <div className="search-books">
                          <div className="search-books-bar">
                              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                              <div className="search-books-input-wrapper">
                                  {/*
                                   NOTES: The search from BooksAPI is limited to a particular set of search terms.
                                   You can find these search terms here:
                                   https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                                   However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                                   you don't find a specific author or title. Every search is limited by search terms.
                                   */}
                                  <input type="text" placeholder="Search by title or author"/>

                              </div>
                          </div>
                          <div className="search-books-results">
                              <ol className="books-grid">
                                  {this.state.books.map((book) => (
                                      <li key={book.id}>
                                          <Book title={book.title} cover={book.imageLinks.thumbnail} authors={book.authors} />
                                      </li>
                                  ))}
                              </ol>
                          </div>
                      </div>
                  ) : (
                      <ListBooks books={this.state.books}/>

                  )}
          </div>
      </div>
    );
  }
}

export default App;
