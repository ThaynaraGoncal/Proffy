import React from 'react';

import logoImg from '../../images/logo.svg';
import landingImg from '../../images/landing.svg';

import studyIcon from '../../images/icons/study.svg';
import giveClassesIcon from '../../images//icons/give-classes.svg';
import purpleHeartIcon from '../../images/icons/purple-heart.svg'

import './style.css'

function Landing() {
    return (
        <div id="pages-landing">
             <div id="pages-landing-content" className="container">
                 <div className="logo-container">
                     <img src={logoImg} alt="Proffy" />
                     <h2>Sua plataforma de estudos online.</h2>
                 </div>

                <img src={landingImg} alt="" className="hero-image"/>

                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </a>
                    <a href="" className="give-classes">
                        <img src={giveClassesIcon} alt="Ensinar"/>
                        Ensinar 
                    </a>
                </div>
                <span className="total-connections">
                        Total de 200 conexões realizadas <img src={purpleHeartIcon} alt="Coraçao roxo"/>
                </span>
             </div>
        </div>
    )
}

export default Landing;