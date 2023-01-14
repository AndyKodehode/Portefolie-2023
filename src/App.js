
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Firstpage } from './Pages/Frontpage';
import { About } from './Pages/About';
import { Fontenehus } from './Pages/Projects';
import { TipCalculator } from './Pages/Projects';
import { StreamingApp } from './Pages/Projects';
import { Learning } from './Pages/Learning';

function App() {
  return (
    <div className="App" >
      
      
      <Routes>
        <Route path="/AndyKodehode/Portefolie-2023" element={<Firstpage />} /> 
        <Route path="About" element={<About />} />
        <Route path="Fontenehus" element={<Fontenehus/>} />
        <Route path="TipCalculator" element={<TipCalculator/>} />
        <Route path="StreamingApp" element={<StreamingApp/>} />
        <Route path="Learning" element={<Learning/>} />

      </Routes>
   
    </div>
  );
}

export default App;
