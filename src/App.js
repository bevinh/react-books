import React, { Component } from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks';
import SearchPage from './SearchPage';
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
                    <SearchPage books={this.state.books} />
                  ) : (
                      <ListBooks books={this.state.books}/>

                  )}
          </div>
      </div>
    );
  }
}

export default App;
