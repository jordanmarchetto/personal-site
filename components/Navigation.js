import Link from 'next/link';
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
    return (
        <header>
            <div className={styles.navItems}>
                <Link legacyBehavior href="/about" passHref>
                    <div className={styles.navItem + " nav-change"} data-link="about">
                        <span className="material-icons">person</span>
                        <span className={styles.text}>about</span>
                        
                    </div>
                </Link>
                <Link legacyBehavior href="/code" passHref>
                    <div className={styles.navItem + " nav-change"} data-link="code">
                        <span className="material-icons">code</span>
                        <span className={styles.text}>code</span>
                    </div>
                </Link>
                <Link legacyBehavior href="/contact" passHref>
                    <div className={styles.navItem + " nav-change"} data-link="contact">
                    <span className="material-icons">email</span>
                    <span className={styles.text}>contact</span>
                    </div>
                </Link>
                <Link legacyBehavior href="/resume" passHref>
                    <div className={styles.navItem + " nav-change"} data-link="resume">
                    <span className="material-icons">description</span>
                    <span className={styles.text}>resume </span>
                    </div>
                </Link>
            </div>
        </header>
    );
}

export default Navigation;
