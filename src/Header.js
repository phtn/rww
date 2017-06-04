import React from 'react'
import Slider from 'react-slick'
import Glass from './glass.svg'
import Bottle from './bottle.svg'
import Shower from './shower.svg'
import Drop from './drop.svg'

const settings = {
    dots: true,
    arrows: false,
	autoplay: true,
	autoplaySpeed: 3700,
    infinite: true,
	fade: false,
	vertical: false
}
const styles = {
    container: {
        position: 'absolute',
        width: window.innerWidth,
        top: 0,
        textAlign: 'center'
    },
    div1: {
        height: 250,
        backgroundColor: '#003666',
        margin: 0,
        textAlign: 'center',
        lineHeight:'350px',
    },
    div2: {
        height: 250,
        backgroundColor: '#5482ab',
        margin: 0,
        textAlign: 'center',
        lineHeight: '350px'
    },
    div3: {
        height: 250,
        backgroundColor: '#8996a0',
        margin: 0,
        textAlign: 'center',
        lineHeight: '350px'
    },
    div4: {
        height: 250,
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
        marginLeft: window.innerWidth/2 -20,
        marginTop: 150
    }
}
export default props => (
    <div style={styles.container}> 
    <Slider {...settings}>
        <div style={styles.div1}><img src={Glass} style={styles.img} alt=''/></div>
        <div style={styles.div2}><img src={Bottle} style={styles.img} alt=''/></div>
        <div style={styles.div3}><img src={Shower} style={styles.img} alt=''/></div>
        <div style={styles.div4}><img src={Drop} style={styles.img} alt=''/></div>
    </Slider>
    </div>
)