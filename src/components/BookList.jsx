import React from 'react';
import axios from 'axios';

export default class BookList extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    axios.get('')
      .then(response => {
        const books = response.data.results.books;
        this.setState({ books });
      })
      .catch(error => {
        if (error.response){
          console.log(error.status);
        } else {
          console.log(error.message);
        }
      })
  }

  render() {
    return (
      <ul className='BookList'>
        {
          this.state.books.map(book =>
              <li key={book.title}> 
                <img src={book.book_image}></img>
                <div>
                  <span> Title: {book.title}</span>
                  <span> Author: {book.author}</span>
                </div>
              </li>
            )
        }
      </ul>
    )
  }
}