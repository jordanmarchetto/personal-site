import Navigation from "./Navigation"
import styles from '../styles/MainLayout.module.css';


const MainLayout = ({ children }) => {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.navigation}>
                    <Navigation />
                </div>
                <div className={styles.main}>
                    {children}
                </div>
            </div>
            <div className={styles.copyright}>&copy; 2021 - <a href="mailto:contact@jordanmarchetto.com">Jordan Marchetto</a></div>
        </div>
    );
}

export default MainLayout;