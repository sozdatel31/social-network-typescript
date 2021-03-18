import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {PostPropsType} from "./Components/Profile/MyPosts/Post/Post";
import {DialogsItemPropsType} from "./Components/Dialogs/DialogsItem/DialogsItem";
import {MessagePropsType} from "./Components/Dialogs/Messages/Messages";

const postData: Array<PostPropsType> = [
    {id: 1, message: "Hello world", likesCount: 99},
    {id: 2, message: "Hey, Arnold", likesCount: 27},
    {id: 3, message: "How are you", likesCount: 77},
    {id: 4, message: "what's up, men", likesCount: 27},
    {id: 5, message: "Hello, Incubatornye", likesCount: 54}
]
const dialogsData: Array<DialogsItemPropsType> = [
    {id: 1, name: "Nadya"},
    {id: 2, name: "Kolya"},
    {id: 3, name: "Antony"},
    {id: 4, name: "Ivan"},
    {id: 5, name: "Victor"},
    {id: 6, name: "Pavel"}]

const messageData: Array<MessagePropsType> = [
    {id: 1, message: "yo"},
    {id: 2, message: "MEOWWW"},
    {id: 3, message: "MM?"},
    {id: 4, message: "hey yo"},
    {id: 5, message: "MEOWWW"},
    {id: 6, message: "MEOWWW"},
    {id: 7, message: "MEOWWW"},
    {id: 8, message: "MEOWWW"}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messageData={messageData} postData={postData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
