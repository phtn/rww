import React, { Component } from 'react';
import Header from './Header'
import Nav from './components/Nav'
import Accord from './components/Accord'
import Social from './components/Social'
import Footer from './components/Footer'
import BG from './assets/bg.jpeg'
import './App.css';
import './animate.css'

const styles = {
  container: {
    background: `url(${BG})`,

  }
}
class App extends Component {
  render() {
    return (
      <div className="App" style={styles.container}>
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
