import React from 'react'
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";

export type ActionType = AddPostActionType | UpdateNewTextActionType | SetUserProfileType |
    SetStatusProfileType | SetProfilePhotoType

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
type SetProfilePhotoType = {
    type: "SET-PROFILE-PHOTO",
    photo: PhotosType
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
type ContactsType = {
    "Facebook": string,
    "Website": string,
    "vk": string,
    "twitter": string,
    "instagram": string,
    "youtube": string,
    "github": string,
    "mainLink": string
}
type PhotosType = {
    small: string,
    large: string,
}
export type ProfileType = {
    aboutMe?: string,
    contacts?: ContactsType,
    lookingForAJob?: boolean,
    lookingForAJobDescription?: string,
    fullName?: string,
    userId?: number,
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
export const savePhotoSuccess = (photos: PhotosType): SetProfilePhotoType => {
    return {
        type: "SET-PROFILE-PHOTO",
        photo: photos
    }
}


export const getUserProfile = (userId: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getStatusProfile = (userId: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatusProfile(response.data));
}

export const updateStatusProfile = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusProfile(status));
    }
}

export const savePhoto = (arg0: File) => async (dispatch: Dispatch) => {
    const response = await profileAPI.savePhoto(arg0)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile: any) => async (dispatch: Dispatch<any>, getState: ()=> AppStateType) => {
    const userId = getState().auth.data.userId
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId? userId.toString():""))
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
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
                ...state, status: action.status
            };
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-PROFILE-PHOTO":
            return {...state, profile: {...state.profile, photos: action.photo}}
        default:
            return {...state};
    }
}

export default profileReducer;