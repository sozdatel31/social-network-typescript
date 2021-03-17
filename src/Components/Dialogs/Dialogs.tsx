import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    id: number
    name: string
}

type MessagePropsType = {
    message: string | number
    id: number
}

function DialogsItem(props: DialogsItemPropsType) {
    return (<div className={s.dialogsItems}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>)
}

function Messages(props: MessagePropsType) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

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