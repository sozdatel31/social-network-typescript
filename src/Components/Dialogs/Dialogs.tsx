import React from "react";
import s from "./Dialogs.module.css"
import DialogsItem  from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";
import {dialogsPageType} from "../../Redux/state"

function Dialogs(props: dialogsPageType) {
    const dialogElement = props.dialogsData.map((d) => {
        return <DialogsItem id={d.id} name={d.name}/>
    })

    const messageElement = props.messageData.map((m) => {
        return <Messages id={m.id} message={m.message}/>
    })
const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addMessageElement = () => {
        const textMessage = newMessageElement.current?.value
        alert(textMessage)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.message}>
                {messageElement}
                <textarea ref={newMessageElement}></textarea>
                <div><button onClick={addMessageElement}>add message</button></div>
            </div>
        </div>
    )
}
export default Dialogs;