import React from 'react'
import styles from './Projects.module.css'
import folimer from './folimer.png'
import pmu from './pmu.jpeg'

const Projects = () => {
    return (

        <div className={styles.projetImgs}>
            <img src={folimer} className={styles.imgs} alt='dupa' />
            <img src={pmu} className={styles.imgs} alt='dupa' />
        </div>

    )
}

export default Projects