import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {store} from "./Redux/redux-store";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";

// type PropsType = {
//     store: typeof store
// }
//

function App() {
    //const state = props.store.getState();
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>
                    <Route path="/profile"
                           render={() => <Profile/>}/>
                           <Route path="/users"
                                  render={() => <UsersContainer/>}/>

                    <Route path="/news"
                           render={() => <News/>}/>
                    <Route path="/music"
                           render={Music}/>
                    <Route path="/settings"
                           render={Settings}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
