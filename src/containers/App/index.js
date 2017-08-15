import React, { Component } from 'react';
import NewBookForm from '../NewBookForm';
import BookListAppTitle from '../../components/BookListAppTitle';
import BookList from '../BookList';
import SearchField from '../../components/BookFilterInput';
import { getBooksFromFakeXHR } from '../../lib/books.db.js';
import { addBookToFakeXHR } from '../../lib/books.db.js'
import './styles.css';

class AppContainer extends Component{
 constructor(props){
  super(props);
  this.appTitle = 'Reactive Book List';
  this.state = {
    books: [],
    searchFilter: ''
  };

  this.parentAddBook = this.parentAddBook.bind(this)
  this.setSearchFilter = this.setSearchFilter.bind(this)
}
setSearchFilter( event ){
  const searchFilter = event.target.value;
  this.setState({ searchFilter});
}
parentAddBook( newBook ) {
  addBookToFakeXHR( newBook )
  .then( books => {
    this.setState({
      books: books
    })
  })
}
componentDidMount() {
  getBooksFromFakeXHR().then( books => {
    this.setState({
      books: books
    })
  })
}

render(){
  return (
    <div className="AppContainer">
    <BookListAppTitle appTitle = { this.appTitle }/>
    <SearchField setSearchFilter = { this.setSearchFilter }/>
    <BookList books = { this.state.books } searchFilter = { this.state.searchFilter }/>
    <NewBookForm childAddBook = { this.parentAddBook }/>
    </div>
    );
}
}
export default AppContainer;