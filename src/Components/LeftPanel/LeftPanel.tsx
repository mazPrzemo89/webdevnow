import React from 'react'
import styles from './LeftP.module.css'
import jsIcon from '../../Icons/js.png'
import reactIcon from '../../Icons/react-js.png'
import cssIcon from '../../Icons/css.png'
import mongoIcon from '../../Icons/mongodb.png'




const LeftPanel = () => {
    return (
        <div className={styles.lPanel}>
            <div className={styles.logoDiv}>
                <div className={styles.logo}>
                </div>
            </div>

            <img className={styles.image}
                src={reactIcon} alt={''} />
            <img className={styles.image}
                src={jsIcon} alt={''} />
            <img className={styles.image}
                src={cssIcon} alt={''} />
            <img className={styles.iconMongo}
                src={mongoIcon} alt={''} />
        </div >
    )
}

export default LeftPanel