import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from "./Redux/redux-store";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";



    ReactDOM.render(
        <HashRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <App/>
                </Provider>
            </React.StrictMode>
        </HashRouter>
        ,
        document.getElementById('root')
    );