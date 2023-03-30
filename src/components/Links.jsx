import React from 'react'
import { styles } from '../styles'
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <div>
        <p className={styles.sectionHeadText}>Reach me here</p>
        <h3 className={styles.sectionsubText}>
        <a href="https://github.com/coffeeprynce/">
          My github: github/coffeeprynce
        </a>
        <br/>
        <a href="https://www.linkedin.com/in/kyle-nguyen-29272b255//">
        My linkedin: KyleNguyen
        </a>
        <br/>
        My email: q_nguyen91@yahoo.com
        </h3>
    </div>
  )
}

export default Links