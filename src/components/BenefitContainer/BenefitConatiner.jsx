import React from 'react'
import styles from '../BenefitContainer/Benefit.module.css'
import box1 from '../../images/box1.png'
import box2 from '../../images/box2.png'
import box3 from '../../images/box3.png'
import box4 from '../../images/box4.png'
import box5 from '../../images/box5.png'
import box6 from '../../images/box6.png'

const BenefitConatiner = () => {
  return (
    <div className={styles.mainConatiner}>
        <h2 className={styles.mainConatinerh2}>Our Amazing Benefits <span className={styles.mainConatinerspan}> Helpful For Your Hiring</span></h2>
        

        <div className={styles.mainBox}>
            <div className={styles.box} >
                <img src={box1} alt="" />
                <p className={styles.boxHead1}>60%
                <span className={styles.boxHead2}>Cost Reduce</span></p>

                <p className={styles.boxDesc}>Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies</p>
            </div>

            <div className={styles.box} >
                <img src={box2} alt="" />
                <p className={styles.boxHead1}>50% Faster
                <span className={styles.boxHead2}>Recruitment By TAT</span></p>

                <p className={styles.boxDesc}>Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies</p></div>

            <div className={styles.box} >
                <img src={box3} alt="" />
                <p className={styles.boxHead1}>Highly Contextualized 

                <span className={styles.boxHead2}>Interview</span></p>

                <p className={styles.boxDesc}>Al models generate highly contextualized interviews for the candidates based on your Company profile, Job description and Candidate's CV. </p></div>

            <div className={styles.box} >
                <img src={box4} alt="" />
                <p className={styles.boxHead1}>Automated 

                <span className={styles.boxHead2}>Scheduling</span></p>

                <p className={styles.boxDesc}>Email & WhatsApp based communication for interview scheduling with automated reminders.</p></div>

            <div className={styles.box} >
                <img src={box5} alt="" />
                <p className={styles.boxHead1}>AI generated Interviews
                <span className={styles.boxHead2}>On what matters</span></p>

                <p className={styles.boxDesc}>0 manual interventions, completely seamless experience for the candidates.</p>
            </div>

            

            <div className={styles.box} >
                <img src={box6} alt="" />
                <p className={styles.boxHead1}>in-built
                <span className={styles.boxHead2}>ATS</span></p>

                <p className={styles.boxDesc}>To manage all of your candidates & Credo verified CVs. Integrations with other ATS coming soon.</p>
            </div>


        </div>



    </div>
  )
}

export default BenefitConatiner;