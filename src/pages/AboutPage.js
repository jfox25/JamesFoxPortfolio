import styles from "./Pages.module.css"
import Navbar from "../components/Navbar/Navbar"

const AboutPage = () => {
  return (
    <div className={styles.aboutPageContainer}>
        <Navbar />
        <h1 className={styles.PageTitle}>About Page</h1>
    </div>
  )
}

export default AboutPage