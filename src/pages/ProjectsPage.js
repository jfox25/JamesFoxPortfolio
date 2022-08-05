import Navbar from "../components/Navbar/Navbar";
import styles from "./Pages.module.css";
import { useState } from "react";

const ProjectsPage = () => {
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
    <div onScroll={scrollHandler} className={styles.scrollContainer}>
      <div className={styles.projectsPageContainer}>
          <Navbar fullNavbar={showFullNavbar} activeCircle={"Projects"} />
      </div>
    </div>
  )
}

export default ProjectsPage