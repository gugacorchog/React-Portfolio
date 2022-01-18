import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "../src/assets/css/style.css";
import "../src/assets/css/reset.css";

import '../src/App.js';

import Navbar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import ContacMe from './components/ContactMe';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
 return (
   <div>
    <Navbar/>
    <AboutMe/>
    <Work/>
    <ContacMe/>
    <Resume/>
    <Footer/>
    </div>
 );
}

export default App;
