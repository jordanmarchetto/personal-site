import Link from 'next/link';
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
    return (
        <header>
            <div className={styles.navItems}>
                <Link href="/about" passHref>
                    <div className={styles.navItem}>
                        <span className="material-icons">person</span>
                        <span className={styles.text}>about</span>
                        
                    </div>
                </Link>
                <Link href="/code" passHref>
                    <div className={styles.navItem}>
                        <span className="material-icons">code</span>
                        <span className={styles.text}>code</span>
                    </div>
                </Link>
                <Link href="/contact" passHref>
                    <div className={styles.navItem}>
                    <span className="material-icons">email</span>
                    <span className={styles.text}>contact</span>
                    </div>
                </Link>
                <Link href="/resume" passHref>
                    <div className={styles.navItem}>
                    <span className="material-icons">description</span>
                    <span className={styles.text}>resume </span>
                    </div>
                </Link>
            </div>
        </header>
    );
}

export default Navigation;