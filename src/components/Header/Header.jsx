import React from "react";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import TickmarkLogo from "../../images/RightTick.png"
import groupIcon from '../../images/groupIcon.png'
import groupPicture from '../../images/groupPicture.png'
const Header = () => {
  return (
    <header><>
      <Navbar />
      <div className={styles.container1}>
        <h2>
          <span className={styles.span1}>Power Up Your Hiring</span>
          <span className={styles.span2}>with Rework .</span>
        </h2>
        <div>
        <span className={styles.spanDesc}>
          Empower your business with cutting-edge A.I. technology, simplified
          processes, and top-tier talent connections. Rework is your strategic
          partner in redefining how you hire
        </span>
      </div>
      </div>
      <div className={styles.NavbarButtons}>
          <button className={styles.HeaderBtn}>
            <span className={styles.btnText}>
            Book A Demo
            </span>
          </button>
        </div>
        <div className={styles.points}>
    <div className={styles.point}>
      <img src={TickmarkLogo} alt="tickMark" />
      <p className={styles.pointsDesc}>No Credit Required</p>
    </div>
    <div className={styles.point}>
      <img src={TickmarkLogo} alt="tickMark" />
      <p className={styles.pointsDesc}>Streamlined Recruitment Process</p>
    </div>
  </div>

  <div className={styles.pictureContainerGroup}>
    <div className={styles.stats1}>
      <img className={styles.statsGroupIcon1} src={groupIcon} alt="groupIcon" />
      <div>
      <p className={styles.statsDesc1}>10K+</p>
      <p className={styles.statsDesc2}>Candidates Hired</p>
      </div>
    </div>
    <div className={styles.stats2}>
      <img className={styles.statsGroupIcon2} src={groupIcon} alt="groupIcon" />
      <div>
      <p className={styles.statsDesc3}>+360</p>
      <p className={styles.statsDesc4}>Happy Companies</p>
      </div>
    </div>
    <div className= {styles.GroupPicture} >
    <img src={groupPicture} alt="Group Picture" />
      <div className= {styles.ellipse}>

      </div>

    </div>

  </div>
    </>
    </header>
  );
};

export default Header;
