import React from 'react';
import './Toolbar.css';

function Toolbar(props) {
    return (
        <div className="my-app-bar">
            <div className="forum-name">Fichtr</div>

            <div className="search-bar">
                <input type="text" placeholder="Rechercher" />
                <button className="search-button">
                    <img src="./img/search-icon.svg" alt="search-icon" />
                </button>
            </div>

            <button className="btn-connecter">
                <img src="./img/user-regular.svg" alt="user-icon" />
                Connexion
            </button>
        </div>
    );
}

export default Toolbar;
