import './App.css';
import { Navbar } from './components/navbar';
import { Sidenavbar } from './components/sidenavbar';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='flex'>
     <Sidenavbar/>
     
     </div>

    </div>
  );
}

export default App;
