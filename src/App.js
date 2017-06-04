import React, { Component } from 'react';
import Header from './Header'
import Nav from './components/Nav'
import Accord from './components/Accord'
import Social from './components/Social'
import Footer from './components/Footer'
import './App.css';
import './animate.css'

const styles = {
  container: {
    border: '0px solid gray',
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav brand={'Real World Water'}/>
        
        <div style={styles.content} className='content-div'>
          <Accord/>
          <Social/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
