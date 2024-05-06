import './App.css';
import React from 'react';
import { NavBar } from './components/navbar';
import { Sidenavbar } from './components/sidenavbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { About } from './pages/about';
import { Hero } from './pages/hero';
import { Course } from './pages/course';
import { Navbar } from './pages/navbar';
import { More } from './pages/more';
import { Table } from './pages/table';
import { Testimonial } from './pages/testimonial';
import FinalPage from './pages/filnalPage';




function App() {
  return (
    <div className="App" >
      <NavBar/>
      <div className='flex'>

     <Sidenavbar/>
     
     <Routes>
     <Route path="/" element={<Navbar/>} />
     <Route   path="/hero" element={<Hero/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/course" element={<Course/>} />
    <Route path="/more" element={<More/>} />
    <Route path="/table" element={<Table/>} />
    <Route path="/testimonial" element={<Testimonial/>} />
    <Route path="/final" element={<FinalPage/>} />
     </Routes>
     
     </div>

    </div>
  );
}

export default App;
