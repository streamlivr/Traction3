import { Routes, Route } from 'react-router-dom';
import Index from './pages';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: false,
    offset: 100
  });
}, []);

  return (
    <>
    <Routes>
      <Route path="/" element={<Index/>} />
    </Routes>
    </>
  )
}

export default App
