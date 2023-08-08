import './App.css';
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';

import StartupUnicornAnalysis from './pages/MyManualLinks/StartupUnicornAnalysis';
import Resume from './pages/MyManualLinks/Resume';


function App() {

  /*The div below was made so that the basic styles in App.css can be employed*/
  return (
    <div id = "App">
      {/*The routes below goes to specific pages depending on the ending to the site (rishikanchi.com/XXX)*/}
      <Routes>
        <Route index element={<MainPage />}></Route>
        <Route path="/startup-unicorn-analysis" element={<StartupUnicornAnalysis />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
    </div>
  );
}

export default App;
