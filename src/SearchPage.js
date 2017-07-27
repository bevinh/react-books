import React, {Component} from 'react';
import Book from './Book';
import escapeRegExp from 'escape-string-regexp';
import {Link} from 'react-router-dom';

class SearchPage extends Component {

    state = {
        query: ''
    };
    //clean the search results
    updateQuery = (query) => {
        this.setState({query: query.trim()})
    };

    render(){
        let showingBooks;
        if(this.state.query){
            const match = new RegExp(escapeRegExp(this.state.query), 'i');
            showingBooks = this.props.books.filter((book) => match.test(book.title) || match.test(book.authors))
        } else {
            showingBooks = this.props.books
        }
        const { query } = this.state;
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               value={query}
                               onChange={(event) => this.updateQuery(event.target.value)}
                               placeholder="Search by title or author"/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {showingBooks.map((book) => (
                            <li key={book.id}>
                                <Book onUpdateBook={(book, shelf) => {
                                    this.props.onUpdateBook(book, shelf)}} id={book.id} shelf={book.shelf} title={book.title} cover={book.imageLinks.thumbnail} authors={book.authors} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}
export default SearchPage;