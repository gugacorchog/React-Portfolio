import React from "react";

import UrReview from "../../assets/images/UrReview.gif";
import Receipt from "../../assets/images/Receipt.gif";
import EmployeeDemo from "../../assets/images/EmployeeDemo.gif";
import Ecommerce from "../../assets/images/Ecommerce.gif";
import CodeQuiz from "../../assets/images/CodeQuiz.gif";
import PasswordGen from "../../assets/images/PasswordGen.gif";

function Gifs ({ text, classString }){
    return (
<div>

<div className="container">
  <div className="row">
    <div className="col-sm">
      <a href="https://gentle-springs-58149.herokuapp.com/" target="blank">
      <img src= { UrReview } className="homeworks py-3" alt="..." /></a>
    </div>
    <div className="col-sm">
      <a href="https://eat.watsonised.com" target="blank">
      <img src= { Receipt } className="homeworks py-3" alt="..." /></a>
    </div>
    <div className="col-sm">
      <a href="https://github.com/gugacorchog/Employee-Tracker" target="blank">
      <img src= { EmployeeDemo } className="homeworks py-3" alt="..." /></a>  
    </div>
  </div>
</div>

<div className="container">
  <div className="row">
    <div className="col-sm">
      <a href="https://github.com/gugacorchog/E-Commerce"target="blank">
      <img src= { Ecommerce } className="homeworks py-3" alt="..." /></a>
    </div>
    <div className="col-sm">
      <a href="https://gugacorchog.github.io/Code-Quiz/index.html"target="blank">
      <img src= { CodeQuiz } className="homeworks py-3" alt="..." /></a> 
    </div>
    <div className="col-sm">
      <a href="https://gugacorchog.github.io/Password-Generator/"target="blank">
      <img src= { PasswordGen }className="homeworks py-3" alt="..." /></a>
    </div>
  </div>
</div>
</div>  

    )
}

export default Gifs;