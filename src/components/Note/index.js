import React from 'react';

import './styles.scss';

export default function Note(){
    return (
    <div className="note">
        <div className="note-tag"></div>
        <div className="note-text-box">
            <h3 className="note-title">Valor</h3>
            <p className="note-subtitle">R$ 34.599</p>
            <p className="note-detail"> Mensal</p>
        </div>

    </div>)
}