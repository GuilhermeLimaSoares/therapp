import React from 'react';

import './styles.scss';
import './../../assets/styles/global.scss';

import PageHeader from './../../components/PageHeader';
import Note from './../../components/Note';
import Sidebar from './../../components/Sidebar';
import Task from './../../components/Task';

import '../../assets/utils/index';

export default function Home(){
    return (
    <div className="container">
        <PageHeader />
        <Sidebar/>
        <main className="main">
            <span className="note-area"><Note /> <Note /><Note /></span> 
            <span className="task-area"> <Task /><Task /><Task /></span>     
        </main>
      
    </div>)
}