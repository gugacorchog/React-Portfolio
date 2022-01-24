import React from 'react';
import operaHouse from '../../assets/images/sydney.jpeg';
import AboutMe from '../AboutMe';
import Work from '../Work';
import ContactMe from '../ContactMe';
import Resume from '../Resume';
import GVFoto from '../../assets/images/Gustavoed1.jpeg';
import Gifs from '../GifLayout';


function NavBar({ currentPage, handlePageChange }) {
  return (
<div>
  <div>
    <div>
      <div>
        <a className="btn" id="back-to-top-btn" href="#backTop" alt="back to top">
          <button id="back-to-top-btn"> <i className="fas fa-arrow-up"></i></button></a>
          <div className="card mb-3" id="backTop">  
        <img className="card-img-top" src={operaHouse} alt="Opera House" />
     
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="container-fluid">
            <p className="navbar-brand navbar-dark font-bold" id="MyName">Gustavo Corchog</p>
          <div className="collapse navbar-collapse d-flex justify-content-end">
            <ul className="navbar-nav">
           
            <AboutMe text= { AboutMe }></AboutMe>

            <Work text= { Work }></Work>

            <ContactMe text= { ContactMe }></ContactMe>

            <Resume> text= { Resume }</Resume> 

             </ul>
           </div>
          </div>
        </nav>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="gvphoto my-5 my-5">
            <img className="back-ground-photo" src={GVFoto} alt="#" />
            <img className="front-photo" src={GVFoto} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>

  <h2 className="h2" id="text"> About Me </h2>
  <br/>
  <br/>
  <h3> I'm Gustavo thirty five years old from Brazil living in Australia for six years and i decided to study in Bootcamp to change my life 
      and start to work with cooding. I'm a very hardworking person with a lot of desire to learn, I have experience in several areas 
      that I can certainly add to this one in the field that makes me fascinated.
  </h3>
  <br/>
  <br/>
  <br/>
  <p className="h2" id="Work">Work</p>
  </div>  
      <Gifs text= { Gifs }></Gifs>
  <br/>
  <br/>
  <br/>
  </div>

  )
}

        
export default NavBar;
