import styles from "./Pages.module.css"
import Navbar from "../components/Navbar/Navbar"
import { useState } from "react"

const AboutPage = () => {
  const [showFullNavbar, setShowFullNavbar] = useState();
  const scrollHandler = (e) => {
    if(e.target.scrollTop !== 0 && showFullNavbar === false && showFullNavbar !== undefined) return
    if(e.target.scrollTop !== 0) {
      setShowFullNavbar(false);
    } else {
      setShowFullNavbar(true);
    }
  } 

  return (
    <div className={styles.scrollContainer} onScroll={scrollHandler} >
      <div className={styles.aboutPageContainer} >
          <Navbar fullNavbar={showFullNavbar} activeCircle={"About"}/>
          <h1 className={styles.PageTitle}>About</h1>
      </div>
    </div>
  )
}

export default AboutPage