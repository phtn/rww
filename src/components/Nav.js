import React from 'react'
import Water from '../water.svg'
import { Dropdown } from 'semantic-ui-react'


const styles = {
    container: {
        position: 'absolute',
        top: 0,
        backgroundColor: 'transparent',
        width: window.innerWidth
    },
    brand: {
        color: '#eee',
        fontSize: '20px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 100,
        position: 'absolute',
        left: 65,
        lineHeight: '50px'
    },
    logo: {
        height: 20,
        width: 20,
        position: 'absolute',
        margin: 39
    },
    menu: {
        position: 'absolute',
        top: 25,
        right: 35,
        margin: 10,
        backgroundColor: 'rgba(0,0,0,0.2)',
        color: '#ccc'
    },
    menuItems: {
        transform: 'translateX(-28px)',
        textAlign: 'center'
    },
    menuItem: {
        textAlign: 'center'
    }
}

const LOG = msg => {
    console.log(msg)
}

export default props => (
    <div style={styles.container}>
        <img src={Water} style={styles.logo} alt=''/>
        <h1 style={styles.brand}>
            {props.brand}
        </h1>
        <Dropdown text=''
            button
            floating
            onClick={()=>{LOG('test')}} 
            className='icon'
            icon='tasks'
            style={styles.menu} 
        >
            <Dropdown.Menu style={styles.menuItems}>
            <Dropdown.Header icon='user' content='Sign In' />
            <Dropdown.Divider />
            <Dropdown.Item style={styles.menuItem} icon='google' />
            <Dropdown.Item style={styles.menuItem} icon='facebook f' />
            <Dropdown.Item style={styles.menuItem} icon='twitter' />
            </Dropdown.Menu>
        </Dropdown>
    </div>
)