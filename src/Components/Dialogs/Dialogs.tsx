import React from "react";
import s from "./Dialogs.module.css"
import DialogsItem  from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";
import {DialogsContainerType} from "./DialogsContainer";
import { Redirect } from "react-router-dom";


function Dialogs(props: DialogsContainerType) {
    const dialogElement = props.dialogsPage.dialogsData.map((d) => {
        return <DialogsItem id={d.id} name={d.name}/>
    })

    const messageElement = props.dialogsPage.messageData.map((m) => {
        return <Messages id={m.id} message={m.message}/>
    })
const newMessageElement = () => {
        props.addMessage(props.dialogsPage.changeMessageText)
    }
    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.message}>
                {messageElement}
                <textarea
                    placeholder={"Go writing message!!!"}
                    onChange={(e)=>{props.updateMessageText((e.currentTarget.value))}}
                value={props.dialogsPage.changeMessageText}></textarea>
                <div><button onClick={newMessageElement}>add message</button></div>
            </div>
        </div>
    )
}
export default Dialogs;