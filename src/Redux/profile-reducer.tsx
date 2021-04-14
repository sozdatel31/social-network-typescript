import React from 'react'
import {ActionType, PostType, profilePageType} from "./store";

type AddPostActionType = {
    type: "ADD-POST",
    postText: string
}
type UpdateNewTextActionType = {
    type: "UPDATE-NEW-POST-TEXT",
    newText: string
}
export const addPostAC = (postText: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        postText: postText
    }
}
export const UpdateTextPostAC = (newText: string): UpdateNewTextActionType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    }
}

let initialProfileState = {
    changePostText: "",
    postData: [
        {id: 1, message: "Hello world", likesCount: 99},
        {id: 2, message: "Hey, Arnold", likesCount: 27},
        {id: 3, message: "How are you", likesCount: 77},
        {id: 4, message: "what's up, men", likesCount: 27},
        {id: 5, message: "Hello, Incubatornye", likesCount: 54}
    ]
}

const profileReducer = (state: profilePageType = initialProfileState, action: ActionType) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }
            state.postData.unshift(newPost);
            state.changePostText = "";
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.changePostText = action.newText
            return state;
        default:
            return state;
    }
}

export default profileReducer;