import React, { Component } from "react";
import Header from './components/header'; 
import Counter from './components/counter';

class App extends Component {
  render() {
    return(
      <div>
        <Header/>
        <Counter/>
      </div>
    );
  } 
}

export default App;