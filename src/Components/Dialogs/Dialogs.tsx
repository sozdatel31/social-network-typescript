import React from "react";
import s from "./Dialogs.module.css"
import DialogsItem, {DialogsItemPropsType} from "./DialogsItem/DialogsItem";
import Messages, {MessagePropsType} from "./Messages/Messages";

const dialogsData: Array<DialogsItemPropsType> = [
    {id: 1, name: "Nadya"},
    {id: 2, name: "Kolya"},
    {id: 3, name: "Antony"},
    {id: 4, name: "Ivan"},
    {id: 5, name: "Victor"},
    {id: 6, name: "Pavel"}]

const dialogElement = dialogsData.map((d) => {
    return <DialogsItem id={d.id} name={d.name}/>
})

const messageData: Array<MessagePropsType> = [
    {id: 1, message: "yo"},
    {id: 2, message: "MEOWWW"},
    {id: 3, message: "MM?"},
    {id: 4, message: "hey yo"}
]
const messageElement = messageData.map((m) => {
    return <Messages id={m.id} message={m.message}/>
})

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.message}>
                {messageElement}
            </div>
        </div>
    )
}
export default Dialogs;