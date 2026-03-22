// import React from 'react'
import { Link } from "react-router"
import { Button, T } from "../../components"
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <T size="v2" weight="black">
                    <Link to="/">BEKMIRZAYEV.DEV</Link>
                </T>
            </div>
            <div className={styles.navLinks}>
                <ul>
                    <li><T variant="p" size="v1" color="secondary" weight="black">
                        <Link to="/about">ABOUT</Link>
                    </T></li>
                    <li><T variant="p" size="v1" color="secondary" weight="black">
                        <Link to="/streak">STREAK</Link>
                    </T></li>
                    <li><T variant="p" size="v1" color="secondary" weight="black">
                        <Link to="/projects">PROJECTS</Link>
                    </T></li>
                </ul>
            </div>
            <div className={styles.contact}>
                <Button>LET'S CONNECT</Button>
            </div>
        </div>
    )
}

export default Navbar
