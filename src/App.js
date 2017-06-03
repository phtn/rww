import React, { Component } from 'react';
import Header from './Header'
import Nav from './components/Nav'
import Accord from './components/Accord'
import Social from './components/Social'
import Footer from './components/Footer'
import './App.css';

const styles = {
  content: {
    maxWidth: 600,

  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />
        <Nav brand={'Real World Water'}/>
        <div className="App-header">
          <h2>Real World Water</h2>
        </div>
        <div style={styles.content}>
          <Accord/>
          <Social/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
