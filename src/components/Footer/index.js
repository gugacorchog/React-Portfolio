import React from "react";

function Footer ({ text, classString }){
    return (
<div className="container">
      <ul className="row">
        <li className="col-4 col-sm-3">
            <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="#" />
            <a id="contact-me3" href="https://github.com/gugacorchog" alt="GitHub link" target="blank">GitHub</a></li>

        <li className="col-4 col-sm-3">
            <img src="https://img.icons8.com/ios-filled/50/000000/email.png" alt="#" />
            <a id="contact-me1" href="mailto:gugacorchog@gmail.com"alt="E-mail">gugacorchog@gmail.com</a></li>

        <li className="col-4 col-sm-3">
            <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="#"/>
            <a id="contact-me4" href="https://www.linkedin.com/in/gustavo-corchog-86989b38/" alt="Resume" target="blank">Linkedin</a>
        </li>

        <li className="col-4 col-sm-3">
            <img src="https://img.icons8.com/office/40/000000/whatsapp--v1.png" alt="#"/>
            <a id="contact-me2" href="#" alt="Link seach to About Me">0450210486</a>
        </li>

      </ul>

      <footer className="d-flex flex-wrap py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-text-bottom">
          <span className="text-muted">© 2021 GVAS Company, Inc</span>
        </div>

    </footer>
</div>

    )
}

export default Footer;