import React from 'react'
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export type ActionType = AddPostActionType | UpdateNewTextActionType | SetUserProfileType |
    SetStatusProfileType

type SetStatusProfileType = {
    type: "SET-STATUS",
    status: string
}

type AddPostActionType = {
    type: "ADD-POST",
    postText: string
}
type UpdateNewTextActionType = {
    type: "UPDATE-NEW-POST-TEXT",
    newText: string
}
type SetUserProfileType = {
    type: "SET-USER-PROFILE",
    profile: ProfileType
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
type ContactsType = {
    "facebook"?: string,
    "website"?: string,
    "vk"?: string,
    "twitter"?: string,
    "instagram"?: string,
    "youtube"?: string,
    "github"?: string,
    "mainLink"?: string
}
type PhotosType = {
    small: string,
    large: string,
}
export type ProfileType = {
    aboutMe: string,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: PhotosType,

}

export type profilePageType = {
    postData: Array<PostType>
    profile?: ProfileType
    status: string

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
export const setUserProfile = (profile: ProfileType): SetUserProfileType => {
    return {
        type: "SET-USER-PROFILE",
        profile,
    }
}
export const setStatusProfile = (status: string): SetStatusProfileType => {
    return {
        type: "SET-STATUS",
        status,
    }
}
export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
}

export const getStatusProfile = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatusProfile(response.data));
    })
}
export const updateStatusProfile = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatusProfile(status));
        }
    })
}
let initialProfileState: profilePageType = {
    postData: [
        {id: 1, message: "Hello world", likesCount: 99},
        {id: 2, message: "Hey, Arnold", likesCount: 27},
        {id: 3, message: "How are you", likesCount: 77},
        {id: 4, message: "what's up, men", likesCount: 27},
        {id: 5, message: "Hello, Incubatornye", likesCount: 54}
    ],
    profile: undefined,
    status: ''
}

const profileReducer = (state: profilePageType = initialProfileState, action: ActionType): profilePageType => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                postData: [{
                    id: new Date().getTime(),
                    message: action.postText,
                    likesCount: 0
                }, ...state.postData]
            };
        case "SET-STATUS":
            return {
                ...state, status:action.status
            };
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        default:
            return {...state};
    }
}

export default profileReducer;