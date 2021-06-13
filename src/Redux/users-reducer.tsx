import React from 'react'
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

type FollowActionType = {
    type: "FOLLOW",
    userId: number
}
type UnfollowActionType = {
    type: "UNFOLLOW",
    userId: number
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
type ToggleIsFetchingType = {
    type: "TOGGLE-IS-FETCHING",
    isFetching: boolean,
}
type FollowingProgressType = {
    type: "TOGGLE-IS-FOLLOWING-PROGRESS",
    isFetching: boolean,
    userId: number
}

export type UsersActionType =
    | FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageType
    | SetTotalUsersCountType
    | ToggleIsFetchingType
    | FollowingProgressType

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
export type InitialStateUsersType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
    followingIsProgress: Array<number>
}

let initialUsersState: InitialStateUsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingIsProgress: []
}

const usersReducer = (state: InitialStateUsersType = initialUsersState, action: UsersActionType): InitialStateUsersType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            };
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            };
        case "SET-USERS": {
            return {...state, users: action.users}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.count}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE-IS-FOLLOWING-PROGRESS": {
            return {
                ...state,
                followingIsProgress: action.isFetching
                    ? [...state.followingIsProgress, action.userId] :
                    state.followingIsProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: "FOLLOW", userId} as const)
export const unfollowAC = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: "SET-USERS", users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage} as const)
export const setUsersTotalCountAC = (totalUsersCount: number) => ({
    type: "SET-TOTAL-USERS-COUNT",
    count: totalUsersCount
} as const)
export const setToggleIsFetchingAC = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING", isFetching} as const)
export const setToggleIsFollowingProgressAC = (isFetching: boolean, userId: number) => ({
    type: "TOGGLE-IS-FOLLOWING-PROGRESS",
    isFetching,
    userId
} as const)

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setToggleIsFetchingAC(true))
        dispatch(setCurrentPageAC(currentPage))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setToggleIsFetchingAC(false))
            dispatch(setUsersAC(data.items));
            dispatch(setUsersTotalCountAC(data.totalCount));
        })
    }
}

export const unfollowThunkCreator = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setToggleIsFollowingProgressAC(true, userId))
        usersAPI.unfollowUsers(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowAC(userId))
            }
            dispatch(setToggleIsFollowingProgressAC(false, userId))
        });
    }
}
export const followThunkCreator = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setToggleIsFollowingProgressAC(true, userId))
        usersAPI.followUsers(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followAC(userId))
            }
            dispatch(setToggleIsFollowingProgressAC(false, userId))
        });
    }
}
export default usersReducer;