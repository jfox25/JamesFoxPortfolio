import Navbar from "../components/Navbar/Navbar"
import styles from "./Pages.module.css"

const FunPage = () => {
  const scrollHandler = (e) => {
    console.log('scrollTop: ', e.currentTarget.scrollTop);
    console.log('offsetHeight: ', e.currentTarget.offsetHeight);
    console.log("scrolled");
  }
  return (
    <div onScroll={scrollHandler} className={styles.scrollContainer}>
      <div onScroll={scrollHandler} className={styles.funPageContainer}>
          <Navbar activeCircle={"Fun"} />
      </div>
    </div>
  )
}

export default FunPage