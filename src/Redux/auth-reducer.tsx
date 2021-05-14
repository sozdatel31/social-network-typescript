import React from 'react'


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

type ToggleIsFetchingType = {
    type: "TOGGLE-IS-FETCHING",
    isFetching: boolean,
}


export default authReducer;