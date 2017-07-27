import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
    static propTypes={
        onUpdateBook: PropTypes.func.isRequired
    };

    componentDidMount() {
        //setting the value of the dropdown
        const select = document.getElementById(this.props.id);
        select.value = this.props.shelf
    }

    handleSubmit = (e) => {
        //setting the shelf of the book to pass up through the chain
        e.preventDefault();
        const book = this.props.id;
        if(this.props.onUpdateBook)
            this.props.onUpdateBook(book, e.target.value)
    };

    render(){
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.cover}` }}></div>
                    <div className="book-shelf-changer">
                        <form >
                        <select id={this.props.id} onChange={this.handleSubmit}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                        </form>
                    </div>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.authors}</div>
            </div>
        )
    }
}

export default Book;