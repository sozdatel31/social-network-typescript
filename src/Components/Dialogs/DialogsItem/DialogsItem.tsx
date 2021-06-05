import React from "react";
import s from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../Redux/storeX";

function DialogsItem(props: DialogsType) {
    return (<div className={s.dialogsItems}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>)
}

export default DialogsItem;