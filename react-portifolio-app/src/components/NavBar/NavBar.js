import React from 'react';
import operaHouse from '../../assets/images/sydney.jpeg';
import AboutMe from '../AboutMe';
import Work from '../Work';
import ContactMe from '../ContactMe';



function NavBar({ currentPage, handlePageChange }) {
  return (
    <div>
    <img src={operaHouse} />
    
      <nav className="navbar navbar-expand navbar-dark nav-bg-color">
        <div className="container-fluid">
           <p className="navbar-brand font-bold" id="MyName">Gustavo Corchog</p>
        <div className="collapse navbar-collapse d-flex justify-content-end">
          <ul className="navbar-nav">

           <AboutMe text={AboutMe}></AboutMe>
           <Work text={Work}></Work>
           <ContactMe text={ContactMe}></ContactMe>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
