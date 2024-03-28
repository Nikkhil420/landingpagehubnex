import React from "react";
import box11 from "../../images/box11.png";
import box12 from "../../images/box12.png";
import box13 from "../../images/box13.png";
import styles from "./Frame7.module.css";


const Frame7 = () => {
  return (
    <div className={styles.frame7}>
      <div className={styles.F7head}>
        <p className={styles.F7mainhead}>
          Customer <span className={styles.F7mainheadspan}> Testimonials </span>
        </p>

        <p className={styles.F7subhead}>What others has say About Us</p>
      </div>

<div className={styles.f7mainbox}>

<div className={styles.f7box1}>
<img src={box11} alt="" />
<br />
<img src={box12} alt="" />
</div>
<div className={styles.f7box2}>
<img src={box13} alt="" />
<br />
<img src={box12} alt="" />
</div>
<div className={styles.f7box2}>
<img src={box11} alt="" />
<br />
<img src={box12} alt="" />
</div>


</div>




    </div>
  );
};

export default Frame7;
