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
import {StoreType} from "./Redux/store";
import store from "./Redux/redux-store";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

type PropsType = {
    store: typeof store
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
                           render={() => <DialogsContainer store={store}/>}/>

                               {/*dialogsData={state.dialogsPage.dialogsData}*/}
                               {/*changeMessageText={state.dialogsPage.changeMessageText}*/}
                               {/*dispatch={props.store.dispatch.bind(props.store)}*/}
                               {/*messageData={state.dialogsPage.messageData}*/}
                    <Route path="/profile"
                           render={() => <Profile store={store}

                               // postData={state.profilePage.postData}
                               //                    dispatch={props.store.dispatch.bind(props.store)}
                               //                   // addPost={props.store.addPost.bind(props.store)}
                               //                    changePostText={state.profilePage.changePostText}
                               //                    //updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                           />}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={Music}/>
                    <Route path="/settings" render={Settings}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
