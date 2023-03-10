import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import NavBar from './NavBar';
import AvalancheRunnerPage from './pages/AvalancheRunnerPage';
import QuestForFunctionsPage from './pages/QuestForFunctionsPage';
import HotDogStandPage from './pages/HotDogStandPage';
import VideoGameProjectsPage from './pages/VideoGameProjectsPage';
import DataScienceProjectsPage from './pages/DataScienceProjectsPage';
import GISProjectsPage from './pages/GISProjectsPage';
import PhotographyPage from './pages/PhotographyPage';

function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <div id='page-body'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path="/avalancherunner" element={<AvalancheRunnerPage/>} />
            <Route path="/questforfunctions" element={<QuestForFunctionsPage/>}/>
            <Route path="/hotdogstand" element={<HotDogStandPage/>}/>
            <Route path="/videogameprojects" element={<VideoGameProjectsPage/>}/>
            <Route path="/gisprojects" element={<GISProjectsPage/>}/>
            <Route path="/datascienceprojects" element={<DataScienceProjectsPage/>}/>
            <Route path="/photography" element={<PhotographyPage/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
