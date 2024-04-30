import './App.css';
import React from 'react';
import { Navbar } from './components/navbar';
import { Sidenavbar } from './components/sidenavbar';
import { BrowserRouter as Router, Route,} from 'react-router-dom';
import { About } from './pages/about';




function App() {
  return (
    <div className="App" >
      <Navbar/>
      <div className='flex overflow-x-scroll h-[100vh]'>
     <Sidenavbar/>
      <About/>
     </div>

    </div>
  );
}

export default App;
