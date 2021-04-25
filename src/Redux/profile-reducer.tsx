import React from 'react'

export type ActionType = AddPostActionType | UpdateNewTextActionType

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
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type profilePageType = {
    postData: Array<PostType>
    changePostText: string
}
export const UpdateTextPostAC = (newText: string): UpdateNewTextActionType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    }
}

let initialProfileState: profilePageType = {
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
            // let newPost: PostType = {
            //     id: new Date().getTime(),
            //     message: action.postText,
            //     likesCount: 0
            // }
            // state.postData.unshift(newPost);
            // state.changePostText = "";
            return {...state,
                changePostText: "",
                postData: [ {
                    id: new Date().getTime(),
                    message: action.postText,
                    likesCount: 0
                }  ,...state.postData]
            };
        case "UPDATE-NEW-POST-TEXT":
            // state.changePostText = action.newText
            return {...state,
                changePostText: action.newText
            };
        default:
            return {...state};
    }
}

export default profileReducer;