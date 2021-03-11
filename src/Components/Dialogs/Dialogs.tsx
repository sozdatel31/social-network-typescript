import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    id: number
    name: string
}

type MessagePropsType = {
    message: string | number
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

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem id={1} name="Nadya"/>
                <DialogsItem id={2} name="Kolya"/>
                <DialogsItem id={3} name="Antony"/>
                <DialogsItem id={4} name="Ivan"/>
                <DialogsItem id={5} name="Victor"/>
            </div>
            <div className={s.message}>
                <Messages message="I love you"/>
                <Messages message="Hello, Kaban?"/>
                <Messages message="Sosi sosisky"/>
                <Messages message="Ssakroy ebalo"/>
                <Messages message="Meowwwwwwww"/>
                <Messages message="Meowwwwwwww"/>
                <Messages message="Meowwwwwwww"/>
                <Messages message="Meowwwwwwww"/>
                <Messages message="Meowwwwwwww"/>
                <Messages message="Meowwwwwwww"/>
                <Messages message="Meowwwwwwww"/>
            </div>
        </div>
    )
}

export default Dialogs;