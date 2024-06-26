import './App.css';
import React,{useState, useEffect} from 'react';
import { NavBar } from './components/navbar';
import { Sidenavbar } from './components/sidenavbar';
import { Route, Routes} from 'react-router-dom';
import { About } from './pages/about';
import { Hero } from './pages/hero';
import { Course } from './pages/course';
import { Navbar } from './pages/navbar';
import { More } from './pages/more';
import { Table } from './pages/table';
import { Testimonial } from './pages/testimonial';
import FinalPage from './pages/filnalPage';
function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return isMobile ? (
    <p className="text-center">This app is disabled for mobile. Please open in desktop</p>
  ) : (
    <div className="App">
      <NavBar />
      <div className='flex'>
        <Sidenavbar />
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/more" element={<More />} />
          <Route path="/table" element={<Table />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/final" element={<FinalPage />} />
        </Routes>
      </div>
    </div>)
}

export default App;
