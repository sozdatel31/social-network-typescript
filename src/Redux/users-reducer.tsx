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
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE-IS-FOLLOWING-PROGRESS": {
            return {...state,
                followingIsProgress: action.isFetching
                    ? [...state.followingIsProgress, action.userId]:
                    state.followingIsProgress.filter(id=> id != action.userId)
            }
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
export const setToggleIsFetchingAC = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING", isFetching} as const)
export const setToggleIsFollowingProgressAC = (isFetching: boolean, userId: number) => ({type: "TOGGLE-IS-FOLLOWING-PROGRESS", isFetching, userId} as const)


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
type ToggleIsFetchingType = {
    type: "TOGGLE-IS-FETCHING",
   isFetching: boolean,
}
type FollowingProgressType = {
    type: "TOGGLE-IS-FOLLOWING-PROGRESS",
    isFetching: boolean,
    userId: number
}
export type UsersActionType = FollowActionType | UnfollowActionType
    | SetUsersActionType | SetCurrentPageType | SetTotalUsersCountType | ToggleIsFetchingType | FollowingProgressType

export default usersReducer;