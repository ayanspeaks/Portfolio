import React from 'react'

import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils'

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}><h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}><img src={getImageUrl("emailIcon.png")} alt="Email Icon" />
        <a href="mailto:ayanspeakss@gmail.com">Ayanspeaks@gmail.com</a>
        </li>

        <li className={styles.link}><img src={getImageUrl("linkedinIcon.png")} alt="LinkedIn Icon" />
        <a href="https://www.linkedin.com/in/ayan-sardar-771395248/">linkedin.com/Ayanspeaks</a>
        </li>

        <li className={styles.link}><img src={getImageUrl("githubIcon.png")} alt="Github Icon" />
        <a href="https://github.com/ayanspeaks">github.com/Ayanspeaks</a>
        </li>
    </ul>
    </footer>
  )
}

export default Contact