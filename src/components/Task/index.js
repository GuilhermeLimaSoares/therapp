import React from 'react';

import './styles.scss';

export default function Task(){
    return (
    <div className="task">
        <div className="task-tag"></div>
        <div className="task-text-box">
            <h3 className="task-title">Completed Tasks</h3>
            <p className="task-subtitle">Last Compaing</p>
            <p className="task-description"> Compain sent 2 days ago</p>
        </div>
    </div>)
}