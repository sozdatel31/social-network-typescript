import React from 'react';
import './App.css';
import Navbar from "./Components/Nav/Nav";
import {Route, Switch} from 'react-router-dom';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import {AppStateType} from "./Redux/redux-store";
import Preloader from "./Components/common/preloader/Preloader";

const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"))

class App extends React.Component<any, any> {
    componentDidMount(): void {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <React.Suspense fallback={<Preloader/>}>
                        <Switch>
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
                        </Switch>
                    </React.Suspense>
                </div>

            </div>
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