
import styles from '../styles/main.module.scss';

const Presentation = () => {


  return (
    <div className={styles.initial} id='init'>
      <div className={styles.programming_environment}>
        <div className={styles.terminal}>
          <div className={styles.terminal_header}>
            <span className={styles.terminal_title}>user@hostname</span>
            <span className={styles.terminal_path}>~/Documents</span>
          </div>
          <div className={styles.terminal_content}>
            <div className={styles.terminal_input}>
              <span className={styles.terminal_prompt}>$</span>
              <span className={styles.terminal_command}>ls</span>
            </div>
            <div className={styles.terminal_output}>
              <p>Desktop</p>
              <p>Documents</p>
              <p>Downloads</p>
              <p>Music</p>
              <p>Pictures</p>
              <p>Public</p>
              <p>Templates</p>
              <p>Videos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;