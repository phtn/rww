import React from 'react'
import Slider from 'react-slick'
import Glass from './glass.svg'
import Bottle from './bottle.svg'
import Shower from './shower.svg'
import Drop from './drop.svg'


const settings = {
    dots: false,
    arrows: false,
	autoplay: true,
	autoplaySpeed: 3700,
    infinite: true,
	fade: true,
	vertical: false
}
const styles = {
    container: {
        position: 'absolute',
        width: window.innerWidth,
        top: 0,
        textAlign: 'center',

    },
    div1: {
        display: 'inline',
        height: 150,
        backgroundColor: '#222',
        margin: 0,
        textAlign: 'center',
        lineHeight:'300px',
    },
    div2: {
        height: 150,
        backgroundColor: '#222',
        margin: 0,
        textAlign: 'center',
        lineHeight: '350px'
    },
    div3: {
        height: 150,
        backgroundColor: '#222',
        margin: 0,
        textAlign: 'center',
        lineHeight: '350px'
    },
    div4: {
        height: 150,
        backgroundColor: '#222',
        margin: 0,
        textAlign: 'center',
        lineHeight: '350px'
    },
    label: {
        fontSize: '45px',
        fontWieght: 'bolder',
        color: '#ccc',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: 40,
        width: 40,
        marginTop: 50,
        position: 'relative',
        float: 'left',
        left: window.innerWidth/2
        
    }
}
export default props => (
    <div style={styles.container}> 
    <Slider {...settings}>
        <div style={styles.div1}><img src={Glass} style={styles.img} alt=''/><img src={Glass} style={styles.img} alt=''/></div>
        <div style={styles.div2}><img src={Bottle} style={styles.img} alt=''/></div>
        <div style={styles.div3}><img src={Shower} style={styles.img} alt=''/></div>
        <div style={styles.div4}><img src={Drop} style={styles.img} alt=''/></div>
    </Slider>
    </div>
)