import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ProjectsPage from "./pages/ProjectsPage";
import FunPage from "./pages/FunPage";
import {Routes, Route } from "react-router-dom";

function App() {
  const scrollHandler = (e) => {
    console.log('scrollTop: ', e.currentTarget.scrollTop);
    console.log('offsetHeight: ', e.currentTarget.offsetHeight);
    console.log("scrolled");
  }
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage onScroll={scrollHandler}/>} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/fun" element={<FunPage />} />
    </Routes>
  );
}

export default App;
