import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Home from './pages/Home';
import Patients from './pages/Patients';
import Calendar from './pages/Calendar';
import FollowUp from './pages/FollowUp';
import Configuration from './pages/Configuration';

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/Meus-Pacientes" component={Patients} />
            <Route path="/Caledario" component={Calendar} />
            <Route path="/Acompanhamento" component={FollowUp} />
            <Route path="/Configuracoes" component={Configuration} />
        </BrowserRouter>
    )
}

export default Routes;