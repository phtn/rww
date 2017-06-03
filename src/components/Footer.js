import React from 'react'
import { Grid, Divider } from 'semantic-ui-react'

const styles = {
  container: {
    backgroundColor: '#222',
    height: 230,
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    letterSpacing: 1,
    color: '#999',
    paddingTop: 30,
  },
  menuHeader: {
    fontWeight: 400,
    color: '#ccc',
    lineHeight: 2
  },
  menuItem: {
    color: '#ccc',
    lineHeight: 2
  }
}
export default props => (
  <div style={styles.container}>
    <Grid divided='vertically'>
        <Grid.Row columns={3}>
          <Grid.Column>
            <span style={styles.menuHeader}>Products</span><br/>
            <span style={styles.menuItem}>Consumer</span><br/>
            <span style={styles.menuItem}>Enterprise</span>
          </Grid.Column>
          <Grid.Column>
            <span style={styles.menuHeader}>Affiliates</span><br/>
            <span style={styles.menuItem}>Consumer</span><br/>
            <span style={styles.menuItem}>Enterprise</span>
          </Grid.Column>
          <Grid.Column>
            <span style={styles.menuHeader}>Support</span><br/>
            <span style={styles.menuItem}>Team</span><br/>
            <span style={styles.menuItem}>FAQs</span>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    
    <Divider section/>
    Real World Water &copy; 2017
  </div>
)