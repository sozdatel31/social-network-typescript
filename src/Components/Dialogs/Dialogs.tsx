import React from "react";
import s from "./Dialogs.module.css"
import DialogsItem, {DialogsItemPropsType} from "./DialogsItem/DialogsItem";
import Messages, {MessagePropsType} from "./Messages/Messages";
type dialogsPropsType = {
    dialogsData: Array<DialogsItemPropsType>
    messageData: Array<MessagePropsType>
}
function Dialogs(props: dialogsPropsType) {
    const dialogElement = props.dialogsData.map((d) => {
        return <DialogsItem id={d.id} name={d.name}/>
    })

    const messageElement = props.messageData.map((m) => {
        return <Messages id={m.id} message={m.message}/>
    })

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