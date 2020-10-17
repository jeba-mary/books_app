import React from 'react'
import data from '../books.json';
import BookDetails from './BookDetails';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class HomePage extends React.Component {

  constructor() {
    super();
    this.state = {
      books: data.results.books,
      all_books: [],
      selected_books: [],
      on: false,
    }
  }

  componentDidMount = () => {
    var id_gen = 0;
    var sample_data = [];

    this.state.books.forEach(function(key) {

         sample_data.push({
                "id": id_gen + 1,
                "publiser": key.publisher,
                "description": key.description,
                "title": key.title,
                "author": key.author,
                "book_image": key.book_image,
                "rating": key.rating
            })    
    });

    this.setState({ all_books: sample_data });

  }

  gettingBooks = (id) => {
    console.log("Getting Book ID : ", id);
    var related_books = [];
    this.state.all_books.forEach(function(key) {
      if(key.id === id){
        related_books.push({
              "id": key.id,
              "publiser": key.publisher,
              "description": key.description,
              "title": key.title,
              "author": key.author,
              "book_image": key.book_image,
              "rating": key.rating
          })               
      }
  
   });
   this.setState({ selected_books: related_books });
  }

  renderBooks() {
    return this.state.all_books.map((book, index) => {
      return (
        <div className="book" key={book.id}>
          <div className="image">
            <img src={book.book_image} alt={book.title} className="img" onClick={(e)=>this.gettingBooks(book.id)} data-toggle="collapse" data-target="#demo" />
            <div className="content">
              <h4 className="bookname"><b>{book.title}</b></h4>
              <p className="author">{book.author}</p>
              <p className="publisher">{book.publisher}</p>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    
    return (
      <div className="home">
        <div>
          <p className="heading">Bookshelf & <br/>Book Racks</p>
          <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
        <div className="BookContent">
          <div className="title">
            <h5>Hardcover Fiction</h5>
          </div>
          <div className="list">
            <Slider {...settings}>
              {this.renderBooks()}
            </Slider>
            <div className="book-details">
              <BookDetails selectedbooks={this.state.selected_books} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;