import { Outlet, Link } from "react-router-dom"; // <-- use Link from react-router-dom
import styles from "./MainLayout.module.css";

export default function MainLayout() {
    return (
        <div className={styles.mainSurface}>
            <div className={styles.appHeader}>
                <h1 className={styles.appTitle}>BlogCraft</h1>
                <nav role="navigation">
                    <ul className={styles.nav}>
                        <li className={styles.navItem}><Link to="/">Home</Link></li>
                        <li className={styles.navItem}><Link to="/blogs">Blogs</Link></li>
                        <li className={styles.navItem}><Link to="/authors">Authors</Link></li>
                        <li className={styles.navItem}><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.mainContent}>
                <Outlet />
            </div>
        </div>
    );
}
