import Navbar from "../components/Navbar/Navbar"
import styles from "./Pages.module.css"

const ResumePage = () => {
  return (
    <div className={styles.resumePageContainer}>
        <Navbar activeCircle={"Resume"}/>
    </div>
  )
}

export default ResumePage