import React from 'react';

import './styles.scss';
import './../../assets/styles/global.scss';

import Sidebar from './../../components/Sidebar';
import Task from './../../components/Task';

export default function Home(){
    return (
    <div className="container">
        <Sidebar/>
        <main className="main">
            <Task />
        </main>
      
        

    </div>)
}