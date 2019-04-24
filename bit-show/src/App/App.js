import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./Main";


class App extends Component {
    
  render() {

      return (
        <>
            <Header />

          <Main />
          <Footer /> 
          </>
      )
  }
}

export default App;
