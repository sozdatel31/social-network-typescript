import React from 'react'
export type MessageType = {
    id: number
    message: string
}
type AddMessageActionType = {
    type: "ADD-MESSAGE"
    messageText: string
}


type ActionsType =  AddMessageActionType
export type dialogsPageTypes = {
    dialogsData: Array<DialogsType>
    messageData: Array<MessageType>
}
type DialogsType = {
    id: number
    name: string
}

let initialDialogsState: dialogsPageTypes = {

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

const dialogsReducer = (state: dialogsPageTypes = initialDialogsState, action: ActionsType):dialogsPageTypes => {
    switch (action.type) {
        case "ADD-MESSAGE":
            // let newMessage: MessageType = {
            //     id: new Date().getTime(),
            //     message: action.messageText
            // }
            // state.messageData.push(newMessage);
            // state.changeMessageText = "";
            return {...state,
                messageData: [...state.messageData, {
                    id: new Date().getTime(),
                    message: action.messageText
                }]
            };
        default: return state
    }
}
export const addMessageAC = (messageText: string): AddMessageActionType => {
    return {
        type: "ADD-MESSAGE",
        messageText: messageText
    }
}

export default dialogsReducer;