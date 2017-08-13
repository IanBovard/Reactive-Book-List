import React, { Component } from 'react';
import BookListAppTitle from '../../components/BookListAppTitle';
import { getBooksFromFakeXHR } from '../../lib/books.db.js';
import './styles.css';

class AppContainer extends Component{
/*  constructor(){
    super();
  }*/
  render(){
    return (
      <div className="AppContainer">
      <BookListAppTitle />
      </div>
      );
  }
}
export default AppContainer;