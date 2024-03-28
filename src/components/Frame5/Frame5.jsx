import React from 'react'
import styles from './Frame5.module.css'
import TickmarkLogo from '../../images/RightTick.png'
import wrong from '../../images/wrong.png'
import right from '../../images/right.png'
import c2 from '../../images/c2.png'
import c2r from '../../images/c2r.png'

const Frame5 = () => {
  return (
  <div className={styles.Frame5}>
<h2>
        How Our System<span> Operates</span>
      </h2>

   <div className={styles.cardsContainer}>
   <div className={styles.card1}>
      <div className={styles.cardHeader}>  
      <p>1<span className={styles.cardHeaderSpan}>  Month </span></p>
      </div>
      
      <div className={styles.cardBody}>
        <p><span className= {styles.cardHeadingStartSpan} >₹ 199.00</span><span className={styles.cardHeadingEndSpan}>/month</span></p>

        <div>

        <h4>Suitable for companies with 5-10 openings</h4>
        <ul className={styles.points}>
          <li> <div className={styles.point}>
      <img src={right} alt="tickMark" />
      <p className={styles.pointsDesc}>10 interview-ready candidates</p>
    </div></li>
          <li> <div className={styles.point}>
      <img src={right} alt="tickMark" />
      <p className={styles.pointsDesc}>Unlimited job postings</p>
    </div></li>
          <li> <div className={styles.point}>
      <img src={right} alt="tickMark" />
      <p className={styles.pointsDesc}>Receive pre-vetted profiles within 48 hours</p>
    </div></li>
          <li> <div className={styles.point}>
      <img src={wrong} alt="tickMark" />
      <p className={styles.pointsDesc}>Dedicated account manager</p>
    </div></li>
          <li> <div className={styles.point}>
      <img src={wrong} alt="tickMark" />
      <p className={styles.pointsDesc}>Assistance with interview scheduling</p>
    </div></li>
          <li> <div className={styles.point}>
      <img src={wrong} alt="tickMark" />
      <p className={styles.pointsDesc}>Custom reports</p>
    </div></li>
         
        </ul>
        </div>
      </div>
      <div className={styles.cardFooter}>
      <div className={styles.Frame5Btn}>
          <button className={styles.F5Btn}>
            <span className={styles.btnText}>
            Get Started
            </span>
          </button>
        </div>
      </div>
    </div>

    <div className={styles.card2}>
      <div className={styles.cardHeader2}>  
      <p>3<span className={styles.cardHeaderSpan2}>  Months </span></p>
      </div>
      
      <div className={styles.cardBody}>
        <p><span className= {styles.cardHeadingStartSpan} >₹ 149.00</span><span className={styles.cardHeadingEndSpan}>/month</span></p>

        <div>

        <h4 className={styles.cardBodyh4}>Suitable for companies with 5-10 openings</h4>
        <ul className={styles.points2}>
          <li> <div className={styles.point2}>
      <img className={styles.mark} src={c2} alt="tickMark" />
      <p className={styles.pointsDesc2}>10 interview-ready candidates</p>
    </div></li>
          <li> <div className={styles.point2}>
      <img className={styles.mark}  src={c2} alt="tickMark" />
      <p className={styles.pointsDesc2}>Unlimited job postings</p>
    </div></li>
          <li> <div className={styles.point2}>
      <img className={styles.mark}  src={c2} alt="tickMark" />
      <p className={styles.pointsDesc2}>Receive pre-vetted profiles within 48 hours</p>
    </div></li>
          <li> <div className={styles.point2}>
      <img className={styles.mark}  src={c2r} alt="tickMark" />
      <p className={styles.pointsDesc2}>Dedicated account manager</p>
    </div></li>
          <li> <div className={styles.point2}>
      <img className={styles.mark}  src={c2r} alt="tickMark" />
      <p className={styles.pointsDesc2}>Assistance with interview scheduling</p>
    </div></li>
          <li> <div className={styles.point2}>
      <img   className={styles.mark} src={c2r} alt="tickMark" />
      <p className={styles.pointsDesc2}>Custom reports</p>
    </div></li>
         
        </ul>
        </div>
      </div>
      <div className={styles.cardFooter2}>
      <div className={styles.Frame5Btn2}>
          <button className={styles.F5Btn2}>
            <span className={styles.btnText2}>
            Get Started
            </span>
          </button>
        </div>
      </div>
    </div>

    <div className={styles.card3}>
      <div className={styles.cardHeader}>  
        <p>1<span className={styles.cardHeaderSpan}>  Month </span></p>
      </div>
      
      <div className={styles.cardBody}>
        <p><span className= {styles.cardHeadingStartSpan} >₹ 169.00</span><span className={styles.cardHeadingEndSpan}>/month</span></p>

        <div>

        <h4>Suitable for companies with 5-10 openings</h4>
        <ul className={styles.points}>
          <li> <div className={styles.point}>
      <img src={right} alt="tickMark" />
      <p className={styles.pointsDesc}>10 interview-ready candidates</p>
    </div></li>
          <li> <div className={styles.point}>
      <img src={right} alt="tickMark" />
      <p className={styles.pointsDesc}>Unlimited job postings</p>
    </div></li>
          <li> <div className={styles.point}>
      <img src={right} alt="tickMark" />
      <p className={styles.pointsDesc}>Receive pre-vetted profiles within 48 hours</p>
    </div></li>
          <li> <div className={styles.point}>
      <img src={wrong} alt="tickMark" />
      <p className={styles.pointsDesc}>Dedicated account manager</p>
    </div></li>
          <li> <div className={styles.point}>
      <img src={wrong} alt="tickMark" />
      <p className={styles.pointsDesc}>Assistance with interview scheduling</p>
    </div></li>
          <li> <div className={styles.point}>
      <img src={wrong} alt="tickMark" />
      <p className={styles.pointsDesc}>Custom reports</p>
    </div></li>
         
        </ul>
        </div>
      </div>
      <div className={styles.cardFooter}>
      <div className={styles.Frame5Btn}>
          <button className={styles.F5Btn}>
            <span className={styles.btnText}>
            Get Started
            </span>
          </button>
        </div>
      </div>
    </div>

   </div>
   
          <button className={styles.F5Footer}>
            <span className={styles.F5Text}>
            Book A Demo
            </span>
          </button>
    
  </div>
  )
}

export default Frame5