import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
    <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/60277969?s=460&u=9fbafb2244e9db058b9f4010e8d94a4d2245b6a8&v=4" alt="Thaynara Gonçalves"/>
            <div>
                <strong>Thaynara Gonçalves</strong>
                <span>Física</span>
            </div>
        </header>

        <p>
            Entusiasta das melhores tecnologias de física avançada.
            <br /><br/>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de esperiências.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;