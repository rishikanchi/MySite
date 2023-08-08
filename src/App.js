import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import StartupUnicornAnalysis from './components/MyManualLinks/StartupUnicornAnalysis';
import Resume from './components/MyManualLinks/Resume';

function App() {

  return (
    <div id = "App">
      <div>
        <Routes>
          <Route path="/startup-unicorn-analysis" element={<StartupUnicornAnalysis />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
        </Routes>
      </div>
    
      <Navbar />
      <Intro />
      <AboutMe />
    </div>
  );
}

export default App;
