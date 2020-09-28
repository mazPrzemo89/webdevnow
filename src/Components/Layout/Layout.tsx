import React, { ReactChild } from 'react'
import Menu from '../Menu/Menu'
import styles from './Layout.module.css'
import Footer from '../Footer/Footer'

interface ChildrenProps {
    children: ReactChild[] | ReactChild
}

const Layout = ({ children }: ChildrenProps) => {
    return (
        <div className={styles.layout}>
            <Menu />
            <div className={styles.content}>{children}</div>
            <Footer />
        </div>
    )
}

export default Layout