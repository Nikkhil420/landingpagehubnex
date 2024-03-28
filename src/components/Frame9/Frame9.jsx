import React from 'react'
import styles from './Frame9.module.css'
import amazon from '../../images/amazonPhoto.png'
import google from '../../images/GooglePhoto2.png'
import microsoft from '../../images/googlePhoto.png'

const Frame9 = () => {
  return (

    <div className={styles.Frame9}>
    <h2>
            Success<span> Stories</span>
          </h2>
    
       <div className={styles.cardsContainer}>
        
       <div className={styles.card}>
          <div className={styles.cardHeader}>  
        
        <img className={styles.cardHeaderImg} src={microsoft} alt="" />

          </div>
          
          <div className={styles.cardBody}>
          
            <div>
    
            <h4>Rework has been a great way to make the hiring process easier and faster.</h4>
           
            </div>
          </div>
          <div className={styles.cardFooter}>
          <p className={styles.cardFooterPara}>
          “We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “
          </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>  
        
        <img className={styles.cardHeaderImg} src={google} alt="" />

          </div>
          
          <div className={styles.cardBody}>
          
            <div>
    
            <h4>Rework has been a great way to make the hiring process easier and faster.</h4>
           
            </div>
          </div>
          <div className={styles.cardFooter}>
          <p className={styles.cardFooterPara}>
          “We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “
          </p>
          </div>
        </div>
    
        <div className={styles.card}>
          <div className={styles.cardHeader}>  
        
        <img className={styles.cardHeaderImg} src={amazon} alt="" />

          </div>
          
          <div className={styles.cardBody}>
          
            <div>
    
            <h4>Rework has been a great way to make the hiring process easier and faster.</h4>
           
            </div>
          </div>
          <div className={styles.cardFooter}>
          <p className={styles.cardFooterPara}>
          “We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “
          </p>
          </div>
        </div>
    
       </div>
       <div class="frame-parent5"> 

<div class="frame-inner"></div>

<div class="frame-child1"></div>

</div>

</div>
     
  )
}

export default Frame9;