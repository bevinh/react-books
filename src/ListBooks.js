import React, {Component} from 'react';
import Book from './Book'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class ListBooks extends Component {

    static propTypes={
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    };

    render(){
        //setting the filters for the books on the shelf
        const currentBooks = this.props.books.filter(book => book.shelf === "currentlyReading");
        const wantToReadBooks = this.props.books.filter(book => book.shelf === "wantToRead");
        const readBooks = this.props.books.filter(book => book.shelf === "read");

        return(
            <div className="list-books">

                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {currentBooks && currentBooks.map((book) => (
                                        <li key={book.id}>
                                            <Book onUpdateBook={(book, shelf) => {
                                                this.props.onUpdateBook(book, shelf)
                                            }} title={book.title} id={book.id} shelf={book.shelf} cover={book.imageLinks.thumbnail} authors={book.authors} />
                                        </li>
                                    ))}

                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {wantToReadBooks && wantToReadBooks.map((book) => (
                                        <li key={book.id}>
                                            <Book onUpdateBook={(book, shelf) => {
                                                this.props.onUpdateBook(book, shelf)}} title={book.title}id={book.id} shelf={book.shelf} cover={book.imageLinks.thumbnail} authors={book.authors} />
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {readBooks && readBooks.map((book) => (
                                        <li key={book.id}>
                                            <Book
                                                onUpdateBook={(book, shelf) => {
                                                    this.props.onUpdateBook(book, shelf)}}
                                                title={book.title} id={book.id} shelf={book.shelf} cover={book.imageLinks.thumbnail} authors={book.authors} />
                                        </li>
                                    ))}

                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks;