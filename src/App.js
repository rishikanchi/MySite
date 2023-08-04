import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Intro from './components/Intro';

function App() {
  return (
    <div id = "App">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Intro />
    </div>
  );
}

export default App;
