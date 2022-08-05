import Navbar from "../components/Navbar/Navbar";
import styles from "./Pages.module.css";
import { useState } from "react";

const ResumePage = () => {
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
    <div className={styles.scrollContainer} onScroll={scrollHandler}>
      <div className={styles.resumePageContainer}>
          <Navbar fullNavbar={showFullNavbar} activeCircle={"Resume"}/>
      </div>
    </div>
  )
}

export default ResumePage