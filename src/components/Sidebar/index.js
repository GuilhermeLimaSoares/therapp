import React from 'react';
import { Link } from "react-router-dom";

import './styles.scss';
import './../../assets/styles/global.scss';

export default function Sidebar(){
    return (
        <nav className="navigation">
            <h1 className="navigation-title align-flex">THERAPP</h1>

            <ul className="list">
                <li className="list__item align-flex">
                    <Link to="/" className="item">
                        Home
                    </Link>
                </li>
                <li className="list__item align-flex">
                    <Link to="/Meus-Pacientes" className="item">
                        Meu Pacientes
                    </Link>
                </li>
                <li className="list__item align-flex">
                    <Link to="/Caledario" className="item">
                        Calendário
                    </Link>
                </li>
                <li className="list__item align-flex">
                    <Link to="/Acompanhamento" className="item">
                        Acompanhamento
                    </Link>
                </li>
                <li className="list__item align-flex">
                    <Link to="/Configuracoes" className="item">
                        Configurações
                    </Link>
                </li>             
            </ul>
             
        </nav>
    )

}