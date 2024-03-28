import React from "react";
import styles from "./Frame10.module.css";
import plus from "../../images/plus.png";

const Frame10 = () => {
  return (
    <div className={styles.Frame10}>
      <div className={styles.frequent}>
        <p className={styles.frequentPara}>
          Frequently asked{" "}
          <span className={styles.frequentSpan}>Questions</span>
        </p>
      </div>

      <div className={styles.wehavecompiled}>
        <p className={styles.wehavePara}>
          We have Compiled the most commonly asked question about our Platform
          for your information and to enhance your overall experience.
        </p>
      </div>

      <div className={styles.questions}>
        <div className={styles.question}>
          <img className={styles.plus} src={plus} alt="" />
          <p className={styles.question1}>
            How can I Get started with Rework AI?
          </p>
          <p className={styles.answer1}>
            Lorem ipsum dolor sit amet consectetur. Porta velit ultricies
            feugiat tortor odio. Scelerisque habitant quam pharetra adipiscing
            id ipsum et lectus malesuada.
          </p>
        </div>

        <div className={styles.questionwithout}>
          <img className={styles.plus} src={plus} alt="" />
          <p className={styles.question1}>
            How can I Get started with Rework AI?
          </p>
        </div>

        <div className={styles.questionwithout}>
          <img className={styles.plus} src={plus} alt="" />
          <p className={styles.question1}>
            How can I Get started with Rework AI?
          </p>
        </div>

        <div className={styles.questionwithout}>
          <img className={styles.plus} src={plus} alt="" />
          <p className={styles.question1}>
            How can I Get started with Rework AI?
          </p>
        </div>

        <div className={styles.questionwithout}>
          <img className={styles.plus} src={plus} alt="" />
          <p className={styles.question1}>
            How can I Get started with Rework AI?
          </p>
        </div>

        <div className={styles.questionwithout}>
          <img className={styles.plus} src={plus} alt="" />
          <p className={styles.question1}>
            How can I Get started with Rework AI?
          </p>
        </div>

        <div className={styles.questionwithout}>
          <img className={styles.plus} src={plus} alt="" />
          <p className={styles.question1}>
            How can I Get started with Rework AI?
          </p>
        </div>

        <div className={styles.questionwithout}>
          <img className={styles.plus} src={plus} alt="" />
          <p className={styles.question1}>
            How can I Get started with Rework AI?
          </p>
        </div>

        



      </div>
    </div>
  );
};

export default Frame10;
