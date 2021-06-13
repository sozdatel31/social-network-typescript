import React from 'react'
import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


export type InitialStateDataUsersType = {
    data: {
        userId: number | undefined,
        email: string | undefined,
        login: string | undefined,
    }
    isAuth: boolean
}

let initialState = {
    data: {
        userId: undefined,
        email: undefined,
        login: undefined,
    },
    isAuth: false
}

const authReducer = (state: InitialStateDataUsersType = initialState, action: setUserActionType): InitialStateDataUsersType => {
    switch (action.type) {
        case "SET_USER_DATA":
            debugger
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId: number|null, email: string|null, login: string|null, isAuth: boolean) => ({
    type: "SET_USER_DATA",
    data: {data: {userId, email, login, isAuth}}
} as const)

export const getAuthUserData = ()=> (dispatch: Dispatch) => {
   return authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {email, id, login, isAuth} = response.data.data
            dispatch(setAuthUserData( id, email, login, isAuth))
        }
    });
}

export const LoginThunkCreator = (email: string, password: string, rememberMe: boolean,)=> (dispatch: any) => {


    authAPI.login(email,password,rememberMe).then(response => {

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error"
            dispatch(stopSubmit("login", { _error: message}))
        }

    })
}

export const LogoutThunkCreator = ()=> (dispatch: any) => {
    authAPI.logout()
        .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false ))
        }

    })
}

type setUserActionType = {
    type: "SET_USER_DATA",
    data: {
        data:
            {
                userId: number,
                email: string,
                login: string,
            }
    }
    isAuth: boolean
}


export default authReducer;