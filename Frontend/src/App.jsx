// src/App.jsx
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Vendor from '../src/pages/Vendor';  
import PersonDetails from './pages/PersonDetails';
// import NGOInformation from './pages/Divider';
import About from './pages/About';
import Home from './pages/Home'; 
import Login from './components/ui/Login';
import Vet from './pages/Vet';
import MyComponent from './components/chatbot';

import BeneficiaryList from './pages/Benificiary2';
import GoatDetails from './pages/GoatDetails';
import Signup from './components/ui/Signup';

import HomeHindi from './pages/HomeHindi'; 

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/vendor"></Link>
            </li>
          </ul>
        </nav>
        <MyComponent/>
        <Routes>
        <Route path ="/HomeHindi" element = {<HomeHindi/>}/>
          <Route path ="/" element = {<Home/>}/>
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/volunteer" element={<PersonDetails />} />
          <Route path="/login" element = {< Login/>}/>
          <Route path="/About" element = {< About/>}/>
          <Route path="/Vet/:uid" element = {< Vet/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/Benificiary" element={<BeneficiaryList/>}/>
          <Route path="/GoatDetails" element = { < GoatDetails/>}/>

        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
