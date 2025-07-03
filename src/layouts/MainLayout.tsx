import { Outlet } from "react-router";
import styles from "./MainLayout.module.css";


export default function MainLayout() {
    return <div className={styles.mainSurface}>
        <div className={styles.appHeader}>
            <h1 className={styles.appTitle}>BlogCraft</h1>
            <ul className={styles.nav} role="navigation">
                <li className={styles.navItem}>Home</li>
                <li className={styles.navItem}>Blogs</li>
                <li className={styles.navItem}>Authors</li>
                <li className={styles.navItem}>About</li>
            </ul>
        </div>
        <div className={styles.mainContent}>
            <Outlet />
        </div>
    </div>
}