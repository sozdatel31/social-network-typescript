import React from 'react'
import {ActionType, PostType, profilePageType} from "./state";

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

const profileReducer = (state: profilePageType, action: ActionType) => {
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