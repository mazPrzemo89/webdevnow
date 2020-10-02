import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <h3 className={styles.phone}>Phone: +44 7578 224777</h3>
            <h3 className={styles.email}>Email: mazur@webdevnow.co.uk</h3>
        </div>
    )
}

export default Footer