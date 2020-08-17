import React from 'react';

import './styles.scss';
import './../../assets/styles/global.scss';

import Sidebar from './../../components/Sidebar';
import PageHeader from './../../components/PageHeader';

import '../../assets/utils/index';

export default function FollowUp(){
    return (
    <div className="container">
        <PageHeader />
        <Sidebar/>
        <main className="main">
            <h1>FollowUp</h1>
        </main>
    </div>)
}