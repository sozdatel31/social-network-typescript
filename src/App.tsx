import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {StoreType} from "./Redux/state";

type PropsType = {
    store: StoreType
}


function App(props: PropsType) {
    const state = props.store.getState();
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() => <Dialogs dialogsData={state.dialogsPage.dialogsData}
                                                  messageData={state.dialogsPage.messageData}/>}/>
                    <Route path="/profile"
                           render={() => <Profile postData={state.profilePage.postData}
                                                  addPost={props.store.addPost.bind(props.store)}
                                                  changePostText={state.profilePage.changePostText}
                                                  updateNewPostText={props.store.updateNewPostText.bind(props.store)}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={Music}/>
                    <Route path="/settings" render={Settings}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
