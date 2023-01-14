
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Firstpage } from './Pages/Frontpage';
import { About } from './Pages/About';

function App() {
  return (
    <div className="App" >
      
      
      <Routes>
        <Route path="/AndyKodehode/Portefolie-2023" element={<Firstpage />} /> 
        <Route path="About" element={<About />} />

      </Routes>
   
    </div>
  );
}

export default App;
