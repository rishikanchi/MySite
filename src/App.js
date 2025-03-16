import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/sections/Navbar';
import MainPage from './pages/MainPage';
import PageNotFound from './pages/PageNotFound';

import StartupUnicornAnalysis from './pages/MyManualLinks/StartupUnicornAnalysis';
import Resume from './pages/MyManualLinks/Resume';
import French from './pages/French';
import RishiKanchiResume from './pages/MyManualLinks/RishiKanchiResume';


function App() {

  /*The div below was made so that the basic styles in App.css can be employed*/
  return (
    <div id = "App">
      {/*The routes below goes to specific pages depending on the ending to the site (rishikanchi.com/XXX)*/}
      <Routes>
        <Route index element={<MainPage />}></Route>
        <Route path="/startup-unicorn-analysis" element={<StartupUnicornAnalysis />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/RishiKanchiResume" element={<RishiKanchiResume />}></Route>
        <Route path="/francais" element={<French />}></Route>

        {/*The star indicates any page not included in the Routes*/}
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
