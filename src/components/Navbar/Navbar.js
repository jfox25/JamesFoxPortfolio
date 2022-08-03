import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
        <p className={styles.navigationLabel}>Navigation:</p>
        <div className={styles.circleContainer}>
            <div className={`${styles.aboutCircle} ${styles.circle}`}></div>
            <div className={styles.circleDivider}></div>
            <div className={`${styles.projectsCircle} ${styles.circle}`}></div>
            <div className={styles.circleDivider}></div>
            <div className={`${styles.resumeCircle} ${styles.circle}`}></div>
            <div className={styles.circleDivider}></div>
            <div className={`${styles.funCircle} ${styles.circle}`}></div>
        </div>
    </div>
  )
}

export default Navbar