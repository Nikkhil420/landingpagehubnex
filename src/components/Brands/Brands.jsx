import React from 'react'
import styles from '../Brands/Brands.module.css'
import google from "../../images/google.png"
import amazon from '../../images/amazon.png'
import nokia from '../../images/nokia.png'
import spotify from '../../images/spotify.png'



const Brands = () => {
  return (
    <div className={styles.brandContainer}>
        <div>
        <span className={styles.brandText}>
        Hire for 1000+ Brands Including
        </span>
        </div>
        <div className={styles.brandIcons}>
          <img src={google} alt="" />
          <img src={amazon} alt="" />
          <img src={nokia} alt="" />
          <img src={spotify} alt="" />
          <img src={google} alt="" />
          <img src={amazon} alt="" />   
   
        </div>
     
    </div>
    
    
  )
}

export default Brands