import React from "react";
import s from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom";

export type DialogsItemPropsType = {
    id: number
    name: string
}

function DialogsItem(props: DialogsItemPropsType) {
    return (<div className={s.dialogsItems}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>)
}

export default DialogsItem;