import React from 'react'
import Slider from 'react-slick'
import Left from '../quote-left.svg'
import Right from '../quote-right.svg'

const styles = {
  container: {
    marginTop: 20,
    marginRight: 30,
    //border: '1px solid #ccc',
    borderRadius: 50,
    padding: 5,
  },
  img1: {
    height: 20,
    width: 20,
    transform: 'translateX(-80px)'
  },
  img2: {
    height: 20,
    width: 20,
    transform: 'translateX(80px)'
  },
  quote: {
    height: 100,
    paddingTop: '20px',
  },
  text: {
    fontFamily: 'Inconsolata, monospace',
    color: '#555',
    marginBottom: 5

  },
  author: {
    textTransform: 'uppercase',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    fontSize: '14px',
  }
}
const settings = {
  arrows: false,
	autoplay: true,
	autoplaySpeed: 4000,
	fade: true,
  draggable: false,
	vertical: false
}
export default props => (
  <div style={styles.container}>
    <img src={Left} style={styles.img1} alt=''/>
    <Slider {...settings}>
      <div style={styles.quote}>
        <span style={styles.text}>I think therefore I am.</span>
        <br/>
        <span style={styles.author}>
          - Rene Descartes
        </span>
      </div>
      <div style={styles.quote}>
        <span style={styles.text}>
          Democracy is overrated.
        </span>
        <br/>
        <span style={styles.author}>
          - Frank Underwood
        </span>
      </div>
      <div style={styles.quote}>
        <span style={styles.text}>
          Imagination is more important than knowledge.
        </span>
        <br/>
        <span style={styles.author}>
          - Albert Einstein
        </span>
      </div>
      <div style={styles.quote}>
        <span style={styles.text}>
          Exploring the unknown requires tolerating uncertainty.
        </span>
        <br/>
        <span style={styles.author}>
          - Brian Greene
        </span>
      </div>
    </Slider>
    <img src={Right} style={styles.img2} alt=''/>
  </div>
)
