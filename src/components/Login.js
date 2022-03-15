import React from 'react';
import './Login.css';
import Api from '../Api';

export default ({onReceive}) => {

    const handleLogin = async () => {
        let result = await Api.fbPopup();
        if(result) {
            onReceive(result.user);
        } else {
            alert("Erro!");
        }
    }

    return(
        <div className='login'>
            <button onClick={handleLogin}>Logar com Facebook</button>
        </div>
    );
}