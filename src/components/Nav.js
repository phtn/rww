import React from 'react'
import Water from '../water.svg'
import Menu from '../menu.svg'

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
        margin: 38
    },
    menu: {
        height: 15,
        width: 15,
        position: 'absolute',
        top: 30,
        right: 65,
        margin: 10
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
        <img
            onClick={()=>{LOG('test')}} 
            src={Menu} 
            style={styles.menu} 
            alt=''/>
    </div>
)