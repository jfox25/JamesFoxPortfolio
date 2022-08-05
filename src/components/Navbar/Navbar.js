import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";

const Navbar = ({activeCircle, fullNavbar}) => {
  const [navbarContainerClasses, setNavbarContainerClasses] = useState(styles.navbarContainer)
  useEffect(() => {
    console.log(fullNavbar)
    if(fullNavbar === false) { 
      setNavbarContainerClasses(`${styles.navbarContainer} ${styles.smallNavbar}`)
    }
    if(fullNavbar) {
      setNavbarContainerClasses(`${styles.navbarContainer} ${styles.growNavbar}`)
    }
    if(fullNavbar === undefined) {
      setNavbarContainerClasses(`${styles.navbarContainer}`)
    }
  }, [fullNavbar])
  const circleClickHandler = () => {
    console.log("clicked")
  }
  return (
    <div className={navbarContainerClasses}>
        <div className={styles.circleContainer}>
            <div onClick={circleClickHandler} className={`${styles.aboutCircle} ${styles.circle} ${(activeCircle === "About") ? styles.aboutCircleActive : null}`}>About</div>
            <div className={styles.circleDivider}></div>
            <div  onClick={circleClickHandler} className={`${styles.projectsCircle} ${styles.circle} ${(activeCircle === "Projects") ? styles.projectsCircleActive : null}`}>Projects</div>
            <div className={styles.circleDivider}></div>
            <div  onClick={circleClickHandler} className={`${styles.resumeCircle} ${styles.circle} ${(activeCircle === "Resume") ? styles.resumeCircleActive : null}`}>Resume</div>
            <div className={styles.circleDivider}></div>
            <div  onClick={circleClickHandler} className={`${styles.funCircle} ${styles.circle} ${(activeCircle === "Fun") ? styles.funCircleActive : null}`}>Fun</div>
        </div>
    </div>
  )
}

export default Navbar