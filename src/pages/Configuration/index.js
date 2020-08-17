import React from 'react';

import './styles.scss';
import './../../assets/styles/global.scss';

import Sidebar from './../../components/Sidebar';
import PageHeader from './../../components/PageHeader';

import '../../assets/utils/index';

export default function Configuration(){
    return (
    <div className="container">
        <PageHeader />
        <Sidebar/>
        <main className="main">
            <h1>Configuration</h1>
        </main>

    </div>)
}