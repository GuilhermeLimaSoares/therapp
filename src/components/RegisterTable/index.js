import React from 'react';

import './styles.scss';

export default function RegisterTable(){
    return (
        <div className="register">
            <div className="register-tag">
                <h3>Meus Pacientes</h3>
                <h4>Lista dos seu pacientes</h4>
            </div>

            <table className="register-table">
                <tr className="table-row">
                    <th className="table-cell register-table-title">Nome</th>
                    <th className="table-cell register-table-title">Numero</th>
                    <th className="table-cell register-table-title">Cidade</th>
                    <th className="table-cell register-table-title">Agenda</th>
                </tr>
                <tr className="table-row">
                    <td className="table-cell">João</td>
                    <td className="table-cell">55 11 987595903</td>
                    <td className="table-cell">São Paulo - SP</td>
                    <td className="table-cell">Visualizar consultas</td>
                </tr>
                <tr className="table-row">
                    <td className="table-cell">João</td>
                    <td className="table-cell">55 11 987595903</td>
                    <td className="table-cell">São Paulo - SP</td>
                    <td className="table-cell">Visualizar consultas</td>
                </tr>
                <tr className="table-row">
                    <td className="table-cell">João</td>
                    <td className="table-cell">55 11 987595903</td>
                    <td className="table-cell">São Paulo - SP</td>
                    <td className="table-cell">Visualizar consultas</td>
                </tr>
                <tr className="table-row">
                    <td className="table-cell">João</td>
                    <td className="table-cell">55 11 987595903</td>
                    <td className="table-cell">São Paulo - SP</td>
                    <td className="table-cell">Visualizar consultas</td>
                </tr>
            </table>
        </div>
    )
} 