import React from 'react';

import './styles.scss';

import '../../assets/utils/index';


import menuIcon from '../../assets/images/menu.svg'

function PageHeader(){
    return (
        <header className="header">
            <img className="menu-icon" src={menuIcon}/>
        </header>
    )
}

export default PageHeader;