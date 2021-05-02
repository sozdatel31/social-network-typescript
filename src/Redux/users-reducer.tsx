import React from 'react'

type UsersLocation = {
    city: string,
    country: string
}
type PhotosType = {
    "small": string | null
    "large": string | null
}
export type UserType = {
    id: number,
    photos: PhotosType,
    followed: boolean,
    name: string,
    status: string,
    location: UsersLocation
}
export type InitialStateType = {
    users: Array<UserType>
}

let initialUsersState: InitialStateType = {
    users: []
}

const usersReducer = (state: InitialStateType = initialUsersState, action: UsersActionType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            };
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            };
        case "SET-USERS": {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userID: number) => ({type: "FOLLOW", userID} as const)
export const unfollowAC = (userID: number) => ({type: "UNFOLLOW", userID} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: "SET-USERS", users} as const)


type FollowActionType = {
    type: "FOLLOW",
    userID: number
}
type UnfollowActionType = {
    type: "UNFOLLOW",
    userID: number
}
type SetUsersActionType = {
    type: "SET-USERS",
    users: Array<UserType>
}
export type UsersActionType = FollowActionType | UnfollowActionType | SetUsersActionType

export default usersReducer;