import styles from './header.module.scss';
import {
  IoHomeOutline,
  IoCodeSlashSharp,
  IoFolderOutline,
  IoLogoWhatsapp,
  IoTerminalOutline,
} from 'react-icons/io5';
// import { useEffect } from 'react';
export const Header = () => {
  const list = document.querySelectorAll('.list');
  function activeLink() {
    list.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
  }
  list.forEach(item => item.addEventListener('onClick', activeLink));

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <ul>
          <li className={`${styles.list} ${styles.active}`}>
            <a href="#">
              <span className={styles.icon}>
                <IoTerminalOutline />
              </span>
              <span className={styles.text}>Home</span>
            </a>
          </li>
          <li className={styles.list}>
            <a href="#">
              <span className={styles.icon}>
                <IoHomeOutline />
              </span>
              <span className={styles.text}>Home</span>
            </a>
          </li>
          <li className={styles.list}>
            <a href="#">
              <span className={styles.icon}>
                <IoFolderOutline />
              </span>
              <span className={styles.text}>Projects</span>
            </a>
          </li>
          <li className={styles.list}>
            <a href="#">
              <span className={styles.icon}>
                <IoCodeSlashSharp />
              </span>
              <span className={styles.text}>Skills</span>
            </a>
          </li>
          <li className={styles.list}>
            <a href="#">
              <span className={styles.icon}>
                <IoLogoWhatsapp />
              </span>
              <span className={styles.text}>Contact</span>
            </a>
          </li>
          <div className={styles.indicator}></div>
        </ul>
      </div>
    </div>
  );
};
