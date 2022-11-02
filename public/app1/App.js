//import './App.css';
import React from 'react'; // 有需要显示的导入一遍
//import { Auth } from 'aws-amplify';
import Home from './Home';
import About from './About';
import PremiumPage  from './PremiumPage';
import { BrowserRouter as   Router, Routes, Route, NavLink} from 'react-router-dom'; 
// import { BrowserRouter as  Routes, Router,  Route, NavLink} from 'react-router-dom';  如果顺序一错，就不显示了

function App() {
  return (
    <div className="App">
      <Router>
        <div className='content'>
          <NavLink className='content' exact activateClassName='active' to="/">Home</NavLink>
          <NavLink className='content' activateClassName='active' to="/about">About</NavLink>
          <NavLink className='content' activateClassName='active' to="/premium">Premium Content</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/premium" element={<PremiumPage />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
