import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"/>
            </header>
            <nav className="nav">
                <div>
                    <a>Profile</a>

                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className="content">
                <div><img src="https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg"/></div>
                <div><img src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"/></div>
            </div>

        </div>
    );
}

export default App;
