import React from 'react';

import logoImg from '../../images/logo.svg';

function Landing() {
    return (
        <div id="pages-landing">
             <div id="pages-landing" className="container">
                 <div className="logo-container">
                     <img src={logoImg} alt="Proffy" />
                 </div>
             </div>
        </div>
    )
}

export default Landing;