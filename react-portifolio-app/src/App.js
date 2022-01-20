import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "../src/assets/css/style.css";
import "../src/assets/css/reset.css";
import '../src/App.js';

import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer';


function App() {
 return (
   <div style={{backgroundColor:"#495057"}}>
    <Navbar/>
    <Footer/>
    </div>
 );
}

export default App;
