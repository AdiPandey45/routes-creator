 
import './App.css';
import { NavLink, Route,Routes } from 'react-router-dom';
import Home from './components/Home'
import Labs from './components/Labs'
import Support from './components/Support' 
import About from './components/About'
import NotFound from './components/NotFound' 
import { Link } from 'react-router-dom';  
import './index.css' 
import MainHeader from './components/MainHeader'  

function App() { 
  return ( 
    <div className="App">

      <nav>
        <ul>
         <li> <NavLink to="/">Home</NavLink> </li>
         <li> <NavLink to="/Support">Support</NavLink></li>
         <li> <NavLink to="/Labs">Labs</NavLink></li>
         <li> <NavLink to="/About">About</NavLink></li>
      
        </ul>
      </nav>
     <Routes>
      <Route path="/" element={<MainHeader/>}>
      <Route index element={<Home/>}/>
      <Route path="/Support" element={<Support/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Labs" element={<Labs/>}/>
      <Route path="*" element={<NotFound/>}/> </Route>
     


     
     </Routes>
    </div>
  );
}

export default App;
