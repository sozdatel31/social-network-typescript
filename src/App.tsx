import React from 'react';
import './App.css';
import Navbar from "./Components/Nav/Nav";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import {AppStateType} from "./Redux/redux-store";
import Preloader from "./Components/common/preloader/Preloader";

class App extends React.Component<any, any> {
    componentDidMount(): void {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {return <Preloader/>}

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path="/dialogs"
                               render={() => <DialogsContainer/>}/>
                        <Route path="/profile/:userId?"
                               render={() => <ProfileContainer/>}/>
                        <Route path="/users"
                               render={() => <UsersContainer/>}/>

                        <Route path="/news"
                               render={() => <News/>}/>
                        <Route path="/music"
                               render={Music}/>
                        <Route path="/settings"
                               render={Settings}/>
                        <Route path="/login"
                               render={() => <Login/>}/>
                    </div>

                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
   return {
       initialized: state.app.initialized
   }
}

export default compose(
    connect(mapStateToProps, {initializeApp}))(App);