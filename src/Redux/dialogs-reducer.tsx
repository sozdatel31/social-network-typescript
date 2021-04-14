import React from 'react'
import {ActionType, dialogsPageType, MessageType} from "./store";

type AddMessageActionType = {
    type: "ADD-MESSAGE"
    messageText: string
}
type UpdateNewMessageActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT",
    newMessageText: string
}

let initialDialogsState = {
    changeMessageText: "",
    dialogsData: [
        {id: 1, name: "Nadya"},
        {id: 2, name: "Kolya"},
        {id: 3, name: "Antony"},
        {id: 4, name: "Ivan"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Pavel"}],
    messageData: [
        {id: 1, message: "yo"},
        {id: 2, message: "MEOWWW"},
        {id: 3, message: "MM?"},
        {id: 4, message: "hey yo"},
        {id: 5, message: "MEOWWW"},
        {id: 6, message: "MEOWWW"},
        {id: 7, message: "MEOWWW"},
        {id: 8, message: "MEOWWW"}
    ]
}

const dialogsReducer = (state: dialogsPageType = initialDialogsState, action: ActionType) => {
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