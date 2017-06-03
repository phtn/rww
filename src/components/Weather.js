import React from 'react'
import Umbrella from '../umbrella.svg'
const styles = {
  container: {
    marginTop: 20,
    marginRight: 40,
    //border: '1px solid #ccc',
    borderRadius: 50,
    padding: 20,
  },
  img: {
    height: 40,
    width: 40,
  }
}
export default props => (
  <div style={styles.container}>
    <img src={Umbrella} style={styles.img} alt=''/>
    <br/>
    <span>Philadephia, PA</span>
  </div>
)