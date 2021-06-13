import React from 'react'
import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";


export type InitialStateDataUsersType = {
    initialized: boolean
}

let initialState = {
   initialized: false
}

const appReducer = (state: InitialStateDataUsersType = initialState, action: setUserActionType): InitialStateDataUsersType => {
    switch (action.type) {
        case "SET_INITIALIZED":
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}

export const setInitialized = () => ({
    type: "SET_INITIALIZED",
} as const)

export const initializeApp = () => (dispatch: any) => {
    let promise =  dispatch(getAuthUserData());
    Promise.all([promise])
        .then(()=> {
            dispatch(setInitialized())
        })



}


type setUserActionType = {
    type: "SET_INITIALIZED",
    initialized: boolean
}


export default appReducer;