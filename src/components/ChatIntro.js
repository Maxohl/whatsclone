import React from 'react';
import './ChatIntro.css';
import {WhatsApp} from '@material-ui/icons'

export default () => {
    return(
        <div className='chatIntro'>
            <img src='https://cdn-icons-png.flaticon.com/512/68/68805.png' alt='' />
            <h1>Mantenha seu celular conectado</h1>
            <h2>O WhatsApp conecta ao seu telefone para sincronizar suas mensagems.<br></br>Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.</h2>
        </div>
    );
}