import Navbar from "../components/Navbar/Navbar"
import styles from "./Pages.module.css"

const ProjectsPage = () => {
  return (
    <div className={styles.projectsPageContainer}>
        <Navbar activeCircle={"Projects"} />
    </div>
  )
}

export default ProjectsPage