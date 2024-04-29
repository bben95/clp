import './App.css';
import { Navbar } from './components/navbar';
import { Sidenavbar } from './components/sidenavbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='flex'>
     <Sidenavbar/>
     {/* <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
   </Switch> */}
     </div>

    </div>
  );
}

export default App;
