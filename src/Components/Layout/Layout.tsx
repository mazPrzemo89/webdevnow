import React, { ReactChild } from 'react'
import Menu from '../Menu/Menu'
import LeftPanel from '../LeftPanel/LeftPanel'
import styles from './Layout.module.css'
import Footer from '../Footer/Footer'
import Aux from '../Utils/aux/Aux'

interface ChildrenProps {
    children: ReactChild[] | ReactChild
}

const Layout = ({ children }: ChildrenProps) => {
    return (
        <Aux>
            <LeftPanel />
            <Menu />

            <main className={styles.content}>
                <div style={{ minHeight: '600px' }}>{children}</div>
                <Footer />
            </main>

        </Aux>
    )
}

export default Layout