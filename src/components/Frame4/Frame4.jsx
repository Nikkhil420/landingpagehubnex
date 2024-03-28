import React from "react";
import styles from "./Frame4.module.css";
import upload from "../../images/upload.png";
import signin from "../../images/signin.png";
import rewards from "../../images/rewards.png";

const Frame4 = () => {
  return (
    <div className={styles.mainConatiner}>
      <h2>
        How Our System<span> Operates</span>
      </h2>

      <div className={styles.mainBox}>
        <div className={styles.box}>
          <img className={styles.boxImg1} src={upload} alt="" />
          <h3 className={styles.boxHead1}>Upload Documents</h3>

          <p className={styles.boxDesc}>
            Shortlist the most qualified candidate and upload their details for
            the top companies
          </p>
        </div>

        <div className={styles.boxx}>
          <img className={styles.boxImg2} src={signin} alt="" />
          <h3 className={styles.boxHead1}>Sign Up</h3>

          <p className={styles.boxDesc}>
            Follow the link below to sign up and get access of the current job
            postings
          </p>
        </div>

        <div className={styles.box}>
          <img className={styles.boxImg3} src={rewards} alt="" />
          <h3 className={styles.boxHead1}>Get Rewards</h3>

          <p className={styles.boxDesc}>
            As soon as the candidate gets selected you get your benefits
          </p>
        </div>
      </div>

      <div className={styles.Frame4Btn}>
          <button className={styles.F4Btn}>
            <span className={styles.btnText}>
            Get Started
            </span>
          </button>
        </div>

    </div>
  );
};

export default Frame4;
