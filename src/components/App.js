import React, { Component } from 'react';
import './App.css';
import Wizard from './wizard/wizard'

class App extends Component {
  render() { 
    return (
      <div className="App">
        <div className="app-container">
          <Wizard></Wizard> 
        </div>        
          
      </div>
    )
  }

}

export default App;

    // const genres = this.state.library.genres.map(genre => <li key={genre.id}>{genre.name}</li>)
    // const subgenres = this.state.library.genres.map( genre => ( 
    //   genre.subgenres.map( subgenre => (
    //     // if(this.state.book === subgenres.id)
    //     <li key={subgenre.id}>{subgenre.name}</li>
    //   ))
    //  ))
    // const experiment = this.state.library.genres.filter( genre =>genre.id === this.state.book).map( genre => ( genre.subgenres.map( u => (
    //   <li key={u.id}>{u.name}</li>
    // )) ))
    // const experiment = this.state.library.genres.map( genre => ( genre.subgenres.filter( u =>u.id === this.state.book).map( u => (
    //   <li key={u.id}>{u.name}</li>
    // )) ))
    // <li key={subgenre.id}>{subgenre.name}</li>