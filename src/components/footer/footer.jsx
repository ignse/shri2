import React from 'react';

import styles from './footer.module.css';
import {NavLink} from 'react-router-dom';

function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer_content_menu}>
                    <NavLink to={''}>Support</NavLink>
                    <NavLink to={''}>Learning</NavLink>
                    <NavLink to={''}>Русская версия</NavLink>
                </div>
                <span className={styles.footer_copyright}>
                    © 2020 Your Name
                </span>
            </div>
        </footer>
    );
}

export default Footer;