import React from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import styles from './Menu.module.css'

interface ChildComponentProps extends RouteComponentProps<any> {
    /* other props for ChildComponent */
}


const isActive = (history: any, path: string) => {
    if (history.location.pathname === path) {
        return { color: '#7D7461' }
    } else {
        return { color: '#E7BB41' }
    }
}

const Menu: React.FC<ChildComponentProps> = ({ history }) => {



    return (
        <div className={styles.menu}>
            <div className={styles.logo}>

            </div>
            <div className={styles.menu_item}>
                <Link style={isActive(history, '/')} to="/">
                    <p >Home</p>
                </Link>
            </div>
            <div className={styles.menu_item}>
                <Link style={isActive(history, '/projects')} to="/projects">
                    <p >Projects</p>
                </Link>
            </div>
            <div className={styles.menu_item}>
                <Link style={isActive(history, '/pricing')} to="/pricing">
                    <p >Pricing</p>
                </Link>
            </div>
            <div className={styles.menu_item}>
                <Link style={isActive(history, '/about')} to="/about">
                    <p >About</p>
                </Link>
            </div>
        </div >

    )
}

export default withRouter(Menu)