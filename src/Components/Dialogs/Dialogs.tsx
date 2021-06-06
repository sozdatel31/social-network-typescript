import React from "react";
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";
import {DialogsContainerType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";


type FormDataType = {
    newMessageBody: string,
}

function Dialogs(props: DialogsContainerType) {
    const dialogElement = props.dialogsPage.dialogsData.map((d) => {
        return <DialogsItem id={d.id} name={d.name}/>
    })

    const messageElement = props.dialogsPage.messageData.map((m) => {
        return <Messages id={m.id} message={m.message}/>
    })
    const newMessageElement = (formData: FormDataType) => {
        props.addMessage(formData.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.message}>
                {messageElement}
                <AddMessageFormRedux onSubmit={newMessageElement}/>
            </div>
        </div>
    )
}
const maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newMessageBody'}
                       placeholder={'Enter your message'}
                        validate={[requiredField, maxLength50]}
                />
            </div>
            <div>
                <button>add message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;


