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
import {DialogsItemPropsType} from "./Components/Dialogs/DialogsItem/DialogsItem";
import {MessagePropsType} from "./Components/Dialogs/Messages/Messages";
import {PostPropsType} from "./Components/Profile/MyPosts/Post/Post";
type AppPropsType = {
    dialogsData: Array<DialogsItemPropsType>
    messageData: Array<MessagePropsType>
    postData: Array<PostPropsType>
}


function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={()=> <Dialogs dialogsData={props.dialogsData} messageData={props.messageData}/>}/>
                    <Route path="/profile" render={()=> <Profile postData={props.postData}/>}/>
                    <Route path="/news" render={()=> <News />}/>
                    <Route path="/music" render={Music}/>
                    <Route path="/settings" render={Settings}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
