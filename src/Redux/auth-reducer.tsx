import React from 'react'
import {Dispatch} from "redux";
import {authAPI} from "../api/api";


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

export const setAuthUserData = (userId: number, email: string, login: string) => ({
    type: "SET_USER_DATA",
    data: {data: {userId, email, login}}
} as const)

export const getAuthUserData = ()=> (dispatch: Dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {email, id, login} = response.data.data
            dispatch(setAuthUserData( id, email, login))
        }

    })
}
export const LoginThunkCreator = (email: string, password: string, rememberMe: boolean,)=> (dispatch: Dispatch) => {
    authAPI.login(email,password,rememberMe).then(response => {
        if (response.data.resultCode === 0) {
           getAuthUserData()
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