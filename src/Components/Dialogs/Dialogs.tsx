import React from "react";
import s from "./Dialogs.module.css"
import DialogsItem  from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";
import {ActionType,  DialogsType, MessageType} from "../../Redux/state";
import { addMessageAC, UpdateMessagePostAC} from "../../Redux/dialogs-reducer";
import {type} from "os";
export type dialogsPageType = {
    dialogsData: Array<DialogsType>
    messageData: Array<MessageType>
    changeMessageText: string
    dispatch: (action: ActionType) =>void
}

function Dialogs(props: dialogsPageType) {
    const dialogElement = props.dialogsData.map((d) => {
        return <DialogsItem id={d.id} name={d.name}/>
    })

    const messageElement = props.messageData.map((m) => {
        return <Messages id={m.id} message={m.message}/>
    })
const newMessageElement = () => {
        props.dispatch(addMessageAC(props.changeMessageText))
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
                    onChange={(e)=>{props.dispatch(UpdateMessagePostAC((e.currentTarget.value)))}}
                value={props.changeMessageText}></textarea>
                <div><button onClick={newMessageElement}>add message</button></div>
            </div>
        </div>
    )
}
export default Dialogs;