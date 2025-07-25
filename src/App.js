import dounload from './download.jpeg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import mes from './mes.jpeg';
import About from './About.js';
import Home from './Home.js';
import Menu from './Menu.js';
import Navbar from './navbar.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

