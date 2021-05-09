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
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}

let initialUsersState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
            return {...state, users:  action.users}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.count}
        }
        default:
            return state
    }
}

export const followAC = (userID: number) => ({type: "FOLLOW", userID} as const)
export const unfollowAC = (userID: number) => ({type: "UNFOLLOW", userID} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: "SET-USERS", users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage} as const)
export const setUsersTotalCountAC = (totalUsersCount: number) => ({type: "SET-TOTAL-USERS-COUNT", count: totalUsersCount} as const)


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
type SetCurrentPageType = {
    type: "SET-CURRENT-PAGE",
   currentPage: number,
}
type SetTotalUsersCountType = {
    type: "SET-TOTAL-USERS-COUNT",
   count: number,
}
export type UsersActionType = FollowActionType | UnfollowActionType | SetUsersActionType | SetCurrentPageType | SetTotalUsersCountType

export default usersReducer;