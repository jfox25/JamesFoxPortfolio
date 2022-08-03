import styles from './SpaceShip.module.css'
import img1 from "../../images/SpaceCraftRef2Top.png"
import img2 from "../../images/SpaceCraftRef2Bottom.png"
const SpaceShip = ({shouldAnimateRun = false, destination}) => {
    console.log(destination)
    return (
        <div className={styles.spaceShipContainer}>
            <img className={(!shouldAnimateRun) ? styles.imgTopBaseClass : styles.imgTopAnimationClass} src={img1} alt="Spaceship" />
            <img className={(!shouldAnimateRun) ? styles.imgBottomBaseClass : styles.imgBottomAnimationClass} src={img2} alt="Spaceship" />
            <div className={(!shouldAnimateRun) ? styles.destinationDisplay : `${styles.destinationDisplay} ${styles.destinationAnimate}`}>{destination}</div>
        </div>
    )
}

export default SpaceShip;