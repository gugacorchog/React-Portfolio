import React from 'react';
import ResumePdf from '../../assets/images/GVCRESUME.pdf'

function Resume ({ text, classString }){
    return (

    <li class="nav-item">
        <a class="nav-link bg-dark" href="{ResumePdf}" alt="Resume" target="blank">Resume</a>
    </li>
    )
}

export default Resume;


