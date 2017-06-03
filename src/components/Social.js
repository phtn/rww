import React, { Component } from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import Contact from './Contact'
import Quotes from './Quotes'
import Weather from './Weather'


const styles = {
  container: {
    border: '1px solid #ccc',
    borderRadius: 5,
    textAlign: 'center',
    height: '100%',
    margin: 20,
    backgroundColor: '#eee',
  }
}
class Social extends Component {
  render(){
    return(
      <div style={styles.container}>
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Contact />
          </Grid.Column>
          <Grid.Column>
            <Quotes />
            <Divider section style={{marginRight: 20}}/>
            <Weather />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    )
  }
}
export default Social