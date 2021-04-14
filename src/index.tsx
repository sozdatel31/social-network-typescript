import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./Redux/redux-store";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}
rerenderEntireTree();

store.subscribe(rerenderEntireTree)

