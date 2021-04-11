import React from 'react'
import {ActionType, dialogsPageType, MessageType} from "./state";

type AddMessageActionType = {
    type: "ADD-MESSAGE"
    messageText: string
}
type UpdateNewMessageActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT",
    newMessageText: string
}

const dialogsReducer = (state: dialogsPageType, action: ActionType) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.messageText
            }
            state.messageData.push(newMessage);
            state.changeMessageText = "";
            return state;
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.changeMessageText = action.newMessageText
            return state;
        default:
            return state;
    }
}
export const addMessageAC = (messageText: string): AddMessageActionType => {
    return {
        type: "ADD-MESSAGE",
        messageText: messageText
    }
}
export const UpdateMessagePostAC = (newMessage: string): UpdateNewMessageActionType => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newMessageText: newMessage
    }
}

export default dialogsReducer;