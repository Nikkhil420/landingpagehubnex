import React from 'react'
import styles from './Frame6.module.css'
import poster from '../../images/poster.png'

const Frame6 = () => {
  return (
    <div className={styles.Frame6}>

<div className= {styles.MainContainer}>
    <div className={styles.mainHeading}>
   <p className={styles.mainHeadingPara}> Discover the Future of <span  className={styles.mainHeadingSpan}> Talent Assessment! </span></p>
    </div>

    <div className={styles.mainBody}>
<p>
Facing challenges in traditional hiring?
</p>
<p>
Uncover the costs, pitfalls, and the game-changing role of Generative AI in recruitment.
</p>
</div>

<div className={styles.mainFooter}>

<p className={styles.mainFooterPara}>🔍 Inside this Whitepaper:</p>
<span className={styles.mainFooterSpan}>•   Manual vs. Machine-based hiring: Costs & Challenges.</span><br />
<span className={styles.mainFooterSpan}>•   The truth about "Interview as a Service."</span><br />
<span className={styles.mainFooterSpan}>•   Generative AI: The simple explanation. Optimize Your Hiring Process Today!</span>
</div>

</div>

<div>
    <img className={styles.Frame6img} src={poster} alt="" />
</div>

<div className={styles.Frame6Buttons}>
          <button className={styles.F6Btn}>
            <span className={styles.F6btnText}>
            Download Now for Smarter Recruitment
            </span>
          </button>
        </div>

    </div>
  )
}

export default Frame6