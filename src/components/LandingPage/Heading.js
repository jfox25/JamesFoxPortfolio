import styles from "./Heading.module.css"

function Heading({shouldAnimateRun}) {
  return (
    <section className={(!shouldAnimateRun) ? styles.headingContainer : styles.headingContainerAnimate}>
       <h1 className={styles.nameHeading}>James Fox</h1>
       <h2 className={styles.titleHeading}>Full Stack Web Developer</h2>
    </section>
  )
}

export default Heading