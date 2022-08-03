import styles from "./SolarNavbar.module.css"
import { useState } from "react";
const ABOUT = "About";
const PROJECTS = "Projects";
const FUN = "Fun";
const RESUME = "Resume";
const SolarNavbar = () => {
    const [activeCircleExists, setActiveCircleExists] = useState(false);
    const [aboutClasses, setAboutClasses] = useState(`${styles.circle} ${styles.aboutCircle}`);
    const [projectsClasses, setProjectsClasses] = useState(`${styles.circle} ${styles.projectCircle} ${styles.projectAnimation}`);
    const [resumeClasses, setResumeClasses] = useState(`${styles.circle} ${styles.resumeCircle} ${styles.resumeAnimation}`);
    const [funClasses, setFunClasses] = useState(`${styles.circle} ${styles.funCircle} ${styles.funAnimation}`);

    // const CircleClickEventHandler = (e) => {
    //     console.log(e)
    //     const clientX = e.clientX - 552;
    //     const clientY = e.clientY - 466;
    //     setAboutClasses(`${styles.hidden}`)
    //     setProjectsClasses(`${styles.circleHidden} `)
    //     setResumeClasses(`${styles.circleHidden}`)
    //     setFunClasses(`${styles.circleHidden}`)
    //     switch (e.target.innerText) {
    //         case ABOUT:
    //             setAboutClasses(`${styles.circle} ${styles.aboutActive}`)
    //             break;
    //         case PROJECTS:
    //             e.target.style.animationPlayState="paused";
    //             setProjectsClasses(`${styles.circle} ${styles.projectsActive} ${styles.projectAnimation}`)
    //             e.target.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
    //             break;
    //         case FUN:
    //             e.target.style.animationPlayState="paused";
    //             setFunClasses(`${styles.circle} ${styles.funActive}`)
    //             e.target.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
    //             break;
    //         case RESUME:
    //             e.target.style.animationPlayState="paused";
    //             setResumeClasses(`${styles.circle} ${styles.resumeActive} ${styles.resumeAnimation}`)
    //             e.target.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
    //             break;
    //         default:
    //             break;
    //     }
    //     setActiveCircleExists(true);
    // }

    const testClickEvent = (e) => {
        const projectsCircle = document.getElementById("projects");
        const resume = document.getElementById("resume");
        const container = document.getElementById("solarNavbarContainer");
        const clientX = e.clientX;
        const clientY = e.clientY;
        setAboutClasses(`${styles.hidden}`)
        setProjectsClasses(`${styles.circleHidden} `)
        setResumeClasses(`${styles.circleHidden}`)
        setFunClasses(`${styles.circleHidden}`)
        switch (e.target.innerText) {
            case ABOUT:
                setAboutClasses(`${styles.circle} ${styles.aboutActive}`)
                setActiveCircleExists(true)
                break;
            case PROJECTS:
                e.target.style.animationPlayState="paused";
                setProjectsClasses(`${styles.circle} ${styles.projectsActive} ${styles.projectAnimation}`)
                setActiveCircleExists(true)
                break;
            case FUN:
                e.target.style.animationPlayState="paused";
                setFunClasses(`${styles.circle} ${styles.funActive} ${styles.funAnimation}`)
                setActiveCircleExists(true)
                break;
            case RESUME:
                e.target.style.animationPlayState="paused";
                setResumeClasses(`${styles.circle} ${styles.resumeActive} ${styles.resumeAnimation}`)
                setActiveCircleExists(true)
                break;
            default:
                break;
        }
        
    }
    function getPosition(el) {
        var xPos = 0;
        var yPos = 0;
       
        while (el) {
          if (el.tagName == "BODY") {
            // deal with browser quirks with body/window/document and page scroll
            var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
            var yScroll = el.scrollTop || document.documentElement.scrollTop;
       
            xPos += (el.offsetLeft - xScroll + el.clientLeft);
            yPos += (el.offsetTop - yScroll + el.clientTop);
          } else {
            // for all other non-BODY elements
            xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            yPos += (el.offsetTop - el.scrollTop + el.clientTop);
          }
       
          el = el.offsetParent;
        }
        return {
          x: xPos,
          y: yPos
        };
      }
  
  return (
    <>
    <div id="solarNavbarContainer" onClick={testClickEvent} className={styles.solarNavbarContainer}>
        <div className={(!activeCircleExists) ? `${styles.ring} ${styles.projectRing}` : `${styles.ringHidden} ${styles.projectRing}`}>
            <div className={(!activeCircleExists) ? `${styles.ring} ${styles.projectRing}` : `${styles.ringHidden} ${styles.projectRing}`}></div>
            <div className={(!activeCircleExists) ?`${styles.ring} ${styles.funRing}` : `${styles.ringHidden} ${styles.funRing}`}></div>
            <div className={(!activeCircleExists) ?`${styles.ring} ${styles.resumeRing}` : `${styles.ringHidden} ${styles.resumeRing}`}></div>

        
            <div id="projects" className={projectsClasses}>
                    Projects
            </div>
        
            <div id="resume" className={resumeClasses}>
                    Resume
            </div>
        
            <div className={funClasses}>
                    Fun
            </div>
            <div className={aboutClasses}>
                    About
            </div>
        </div>
    </div>
    </>
  )
}

export default SolarNavbar