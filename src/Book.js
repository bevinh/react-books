import React, {Component} from 'react';
import serializeForm from 'form-serialize';

class Book extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        const book = this.props.id;
        if(this.props.onUpdateBook)
            this.props.onUpdateBook(book, e.target.value)
    }
    render(){
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.cover}` }}></div>
                    <div className="book-shelf-changer">
                        <form >
                        <select onChange={this.handleSubmit}>
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