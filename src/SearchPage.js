import React, {Component} from 'react';
import Book from './Book';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class SearchPage extends Component {

    static propTypes={
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired,
        onSearchBooks: PropTypes.func.isRequired
    };


    handleSubmit = (e) => {
        e.preventDefault();
        const query = document.getElementById("search_bar").value.trim();
        if(this.props.onSearchBooks)
            this.props.onSearchBooks(query)
    };

    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input id="search_bar" type="text"
                               name="query"
                               placeholder="Search by title or author" onChange={this.handleSubmit}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.props.books && this.props.books.map((book) => (
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