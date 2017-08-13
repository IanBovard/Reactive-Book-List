import React, { Component } from 'react';
import BookListAppTitle from '../../components/BookListAppTitle';
/*import { getBooksFromFakeXHR } from '../../lib/books.db.js';*/
import './styles.css';

class AppContainer extends Component{
 constructor(props){
    super(props);
    this.appTitle = 'Reactive Book List';
  }


  render(){
    return (
      <div className="AppContainer">
      <BookListAppTitle appTitle ={ this.appTitle }/>
      </div>
      );
  }
}
export default AppContainer;