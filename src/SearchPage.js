import React, {Component} from 'react';
import Book from './Book';
import escapeRegExp from 'escape-string-regexp';

class SearchPage extends Component {
    state = {
        query: ''
    };
    updateQuery = (query) => {
        this.setState({query: query.trim()})
    };

    clearQuery = () => {
        this.setState({query: ''})
    };

    render(){
        let showingBooks;
        if(this.state.query){
            const match = new RegExp(escapeRegExp(this.state.query), 'i');
            showingBooks = this.props.books.filter((book) => match.test(book.title) || match.test(book.authors))
        } else {
            showingBooks = this.props.books
        }
        const { books } = this.props;
        const { query } = this.state;
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" >Close</a>
                    <div className="search-books-input-wrapper">
                        {/*
                         NOTES: The search from BooksAPI is limited to a particular set of search terms.
                         You can find these search terms here:
                         https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                         However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                         you don't find a specific author or title. Every search is limited by search terms.
                         */}
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
                                <Book title={book.title} cover={book.imageLinks.thumbnail} authors={book.authors} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}
export default SearchPage;