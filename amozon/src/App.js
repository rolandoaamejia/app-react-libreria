import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';

class App extends React.Component{

constructor(props){
  super(props);

  this.state = {
    books:[
      {id:0, rating: 4, title:'Harry Potter y el caliz de fuego', image:'Libro01.jpg'},
      {id:1, rating: 3, title:'The shining', image: 'Libro02.jpg'},
      {id:2, rating: 5, title: 'Codigo Da Vinci', image:'Libro03.jpg'},
      {id:3,  rating: 5, title: 'El Principito', image:'Libro04.jpg'},
      {id:4,  rating: 5, title: 'Sobrenatural', image: 'Libro05.jpg'}
    ]
  };
}

render() {
  return (
    <div className="app">
      <Menu title="Amozon"/>
      <List items={this.state.books} />
    </div>
  );
}

}

export default App;
