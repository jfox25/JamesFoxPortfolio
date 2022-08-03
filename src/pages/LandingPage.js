import Heading from "../components/LandingPage/Heading"
import SolarNavbar2 from "../components/LandingPage/SolarNavbar2"
import SpaceShip from "../components/LandingPage/SpaceShip"
import styles from "./Pages.module.css"
import { useState } from "react"

const LandingPage = () => {
  const [runAnimation, setRunAnimation] = useState(false);
  const [destination, setDestination] = useState("");

    return (
    <div className={styles.landingPageContainer}>
        <Heading shouldAnimateRun = {runAnimation}/>
        <SolarNavbar2 setRunSpaceShipAnimation = {() => setRunAnimation(true)} setDestination = {setDestination}/>
        <SpaceShip shouldAnimateRun = {runAnimation} destination={destination}/>
    </div>
  )
}

export default LandingPage