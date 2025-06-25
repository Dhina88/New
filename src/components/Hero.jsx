import React from 'react';
import styles from '../styles/Hero.module.css';
import Typewriter from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.heroContent}>
        <div className={styles.left}>
          <div className={styles.subheadline}>Hello I'm Dhina</div>
          <h1 className={styles.headline}>
            I'm{' '}
            <span className={styles.typewriter}>
              <Typewriter
                words={['Innovator.', 'Engineer.', 'Builder.', 'Leader.']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={1200}
              />
            </span>
          </h1>
          <a href="#projects" className={styles.ctaButton}>View My Work</a>
        </div>
        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <img
              src="https://via.placeholder.com/320x320.png?text=Profile+Image"
              alt="Dhina profile"
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 