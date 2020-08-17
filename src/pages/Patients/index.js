import React from 'react';

import './styles.scss';
import './../../assets/styles/global.scss';

import Sidebar from './../../components/Sidebar';
import RegisterTable from './../../components/RegisterTable';
import PageHeader from './../../components/PageHeader';

import '../../assets/utils/index';

export default function Patients(){
    return (
    <div className="container">
        <PageHeader />
        <Sidebar/>
        <main className="main">
            <RegisterTable />
        </main>
    </div>)
}