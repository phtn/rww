import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'
import Person from '../person.svg'

const styles = {
  container: {
    margin: 20
  },
  socialIcon: {
    marginRight: 10
  }
}
const extra = (
  <a>
    <Icon name='call' />
    215-000-9999
  </a>
)
const desc = (
  <div>
    <a style={styles.socialIcon}>
      <Icon name='facebook f' />
    </a>
    <a style={styles.socialIcon}>
      <Icon name='twitter' />
    </a>
    <a style={styles.socialIcon}>
      <Icon name='linkedin' />
    </a>
    <a style={styles.socialIcon}>
      <Icon name='google' />
    </a>
    <a style={styles.socialIcon}>
      <Icon name='mail' />
    </a>
  </div>
)

class Contact extends Component {
  render(){
    return(
      <div style={styles.container}>
         <Card
          image={Person}
          header='Vincent Michaels'
          meta='Consultant'
          description={desc}
          extra={extra}
        />
      </div>
    )
  }
}
export default Contact