import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
            <Dialogs/>
            </div>
            {/*<Profile/>*/}

        </div>
    );
}

export default App;
