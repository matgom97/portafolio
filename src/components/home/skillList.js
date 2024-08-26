import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/main.module.scss";

const SkillList = () => {
  return (
    <section className={styles.fullscreen} id="skills">
      <div className={styles.skills}>
        <div className={styles.skills}>
          <div class={styles.card}>
            <div class={styles.cardContent}>
              Frontend
              <ul>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>lara</li>
              </ul>
            </div>
            <div class={styles.divider}></div>
            <div class={styles.cardContent}>
              Backend
              <ul>
                <li>laravel</li>
                <li>.Net Core</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillList;
