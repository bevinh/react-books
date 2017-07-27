import React, { Component } from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks';
import SearchPage from './SearchPage';
import {Route} from 'react-router-dom';


class App extends Component {
    state = {
        books: []
    };

    componentDidMount()  {
        //get all books
        BooksAPI.getAll().then((books) => this.setState({books}))
    }

    updateBook = (book, shelf) => {
        //get the book, update it, then get all again to refresh the state
        BooksAPI.get(book).then((book) => BooksAPI.update(book, shelf).then(
            BooksAPI.getAll().then((books) => this.setState({books}))
        ))
      };

    render() {
    return (
      <div className="App">
          <div className="app">
              <Route exact path="/" render={({history}) =>  (
                  <ListBooks books={this.state.books}
                  onUpdateBook={(book, shelf) => {
                  this.updateBook(book, shelf);
                      history.push('/')}}
                  />
                  )} />
              <Route path="/search" render={({history}) => (
                      <SearchPage books={this.state.books}
                      onUpdateBook={this.updateBook}
                      />
                  )} />
          </div>
      </div>
    );
  }
}

export default App;
