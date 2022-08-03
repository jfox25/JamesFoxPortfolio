import styles from "./SolarNavbar2.module.css"
import { useState } from "react";
import  { useNavigate } from "react-router-dom";
const ABOUT = "About";
const PROJECTS = "Projects";
const FUN = "Fun";
const RESUME = "Resume";
const SolarNavbar2 = ({setRunSpaceShipAnimation, setDestination}) => {
    const navigate =useNavigate();
    const [aboutClasses, setAboutClasses] = useState(`${styles.circle} ${styles.aboutCircle}`);
    const [projectsClasses, setProjectsClasses] = useState(`${styles.circle} ${styles.projectsCircle}`);
    const [resumeClasses, setResumeClasses] = useState(`${styles.circle} ${styles.resumeCircle}`);
    const [funClasses, setFunClasses] = useState(`${styles.circle} ${styles.funCircle}`);
    const [clickIsDisabled, setClickIsDisabled] = useState(false);
    const onCircleClick = (e) => {
      if(clickIsDisabled) return
      let navigationTo;
      setProjectsClasses(styles.hiddenCircle)
      setResumeClasses(styles.hiddenCircle)
      setFunClasses(styles.hiddenCircle)
      setAboutClasses(styles.hiddenCircle)
      const projects = document.getElementById("projects");
      const resume = document.getElementById("resume");
      const fun = document.getElementById("fun");
      switch (e.target.innerText) {
          case ABOUT:
              setAboutClasses(`${styles.circle} ${styles.aboutCircleActive}`)
              setDestination("About");
              navigationTo = "/about";
              break;
          case PROJECTS:
              var projectPosition = getPosition(projects);
              const xProjects = e.clientX - projectPosition.x - (projects.clientWidth / 2);
              const yProjects = e.clientY - projectPosition.y - (projects.clientHeight / 2);
              setProjectsClasses(`${styles.circle} ${styles.projectsCircleActive}`);
              projects.style.transform = `translate(${xProjects}px,${yProjects}px)`;
              setDestination("Projects");
              navigationTo = "/projects";
              break;
          case RESUME:
              var resumePosition = getPosition(resume);
              const xResume = e.clientX - resumePosition.x - (resume.clientWidth / 2)
              const yResume = e.clientY - resumePosition.y - (resume.clientHeight / 2)
              setResumeClasses(`${styles.circle} ${styles.resumeCircleActive}`)
              resume.style.transform = `translate(${xResume}px,${yResume}px)`
              setDestination("Resume");
              navigationTo = "/resume";
              break;
          case FUN:
              var funPosition = getPosition(fun);
              const xFun= e.clientX - funPosition.x - (fun.clientWidth / 2)
              const yFun = e.clientY - funPosition.y - (fun.clientHeight / 2)
              setFunClasses(`${styles.circle} ${styles.funCircleActive}`)
              fun.style.transform = `translate(${xFun}px,${yFun}px)`
              setDestination("Fun");
              navigationTo = "/fun";
              break;
          default:
              break;
      }
      e.target.innerText = "";
      setClickIsDisabled(true);
      setRunSpaceShipAnimation();
      // Need to caluclate time for timeout based on circle clicked
      setTimeout(() => {
        navigate(navigationTo);
      }, 6100);
    }
    function getPosition(el) {
        var xPos = 0;
        var yPos = 0;
       
        while (el) {
          if (el.tagName === "BODY") {
            var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
            var yScroll = el.scrollTop || document.documentElement.scrollTop;
       
            xPos += (el.offsetLeft - xScroll + el.clientLeft);
            yPos += (el.offsetTop - yScroll + el.clientTop);
          } else {
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
   <div id="container" className={styles.solarNavContainer}>
        <div className={(!clickIsDisabled) ? `${styles.ring} ${styles.projectsRing}` : `${styles.ring} ${styles.projectsRing} ${styles.hiddenRing}`}></div>
        <div className={(!clickIsDisabled) ?`${styles.ring} ${styles.resumeRing}` : ` ${styles.ring} ${styles.resumeRing} ${styles.hiddenRing}`}></div>
        <div className={(!clickIsDisabled) ?`${styles.ring} ${styles.funRing}` : ` ${styles.ring} ${styles.funRing} ${styles.hiddenRing}`}></div>
        <div onClick={onCircleClick} className={aboutClasses}>About</div>
        <div id="projects" onClick={onCircleClick} className={projectsClasses}>Projects</div>
        <div id="resume" onClick={onCircleClick} className={resumeClasses}>Resume</div>
        <div id="fun" onClick={onCircleClick} className={funClasses}>Fun</div>
   </div>
  )
}

export default SolarNavbar2