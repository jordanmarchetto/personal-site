import Link from 'next/link';
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
    return (
        <header>
            <div className={styles.navItems}>
                <Link href="/about" passHref>
                    <div className={styles.navItem}>
                        about
                    </div>
                </Link>
                <Link href="/code" passHref>
                    <div className={styles.navItem}>
                        code
                    </div>
                </Link>
                <Link href="/contact" passHref>
                    <div className={styles.navItem}>
                        contact
                    </div>
                </Link>
                <Link href="/resume" passHref>
                    <div className={styles.navItem}>
                        resume
                    </div>
                </Link>
            </div>
        </header>
    );
}

export default Navigation;