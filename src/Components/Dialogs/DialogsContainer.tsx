import React from "react";
import {addMessageAC, UpdateMessagePostAC} from "../../Redux/dialogs-reducer";
import store from "../../Redux/redux-store";
import Dialogs from "./Dialogs";

export type dialogsPageType = {
    store: typeof store;
}

function DialogsContainer(props: dialogsPageType) {
    const state = props.store.getState();

    const AddMessage = (currentMessageText: string) => {
        props.store.dispatch(addMessageAC(currentMessageText));
    }
    const updateNewMessageText = (text: string) => {
        const action = UpdateMessagePostAC(text);
        props.store.dispatch(action)
    }
    return (
        <Dialogs dialogsData={state.dialogsPage.dialogsData}
                 messageData={state.dialogsPage.messageData}
                 changeMessageText={state.dialogsPage.changeMessageText}
                 updateMessageText={updateNewMessageText}
                 addMessage={AddMessage}/>
    )
}

export default DialogsContainer;