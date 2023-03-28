import React, { useEffect, useState } from 'react';
import styles from './about.module.css';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa';
const About = () => {
  return (
    <div className={styles.aboutContaier}>
      <div className={styles.leftSide}>
        <div className={styles.aboutTitle}>
          <h2>About Us</h2>
        </div>

        <div>
          <img
            className={styles.profileImage}
            src="https://c.saavncdn.com/941/GOKU-ULTRA-INSTINCT-RAP-Hindi-2021-20210905220010-500x500.jpg"
            alt="My_Image"
          />
          <p className={styles.pTag}>Age : 25</p>
          <p className={styles.pTag}>Location : India</p>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div>
          <h2>Prateek Dayal</h2>
          <p className={styles.description}>
            Write about your self.&nbsp; <FaLessThan />
            &nbsp;70-80 words&nbsp;
            <FaGreaterThan />
          </p>
        </div>

        <div className={styles.insideRightSide}>
          <div className={styles.smallCart}>
            <p>What are your skills</p>
            <p className={styles.marginTop}>-write your skills here</p>
            <textarea rows="5"></textarea>
          </div>

          <div className={styles.smallCart}>
            <p>What are your skills</p>
            <p className={styles.marginTop}>-write your skills here</p>
            <textarea rows="5"></textarea>
          </div>

          <div className={styles.smallCart}>
            <p>What are your skills</p>
            <p className={styles.marginTop}>-write your skills here</p>
            <textarea rows="5"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
