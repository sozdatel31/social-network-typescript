import React from 'react'

type UsersLocation = {
    city: string,
    country: string
}
export type UserType = {
    id: number,
    photoUrl: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: UsersLocation
}
export type InitialStateType = {
    users: Array<UserType>
}

let initialUsersState: InitialStateType = {
    users: [
        {
            id: 1,
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Pavel_Derevyanko_%282017-10-03%29_2_%28cropped%29.jpg',
            followed: true,
            fullName: "Pavel",
            status: "I am a boss",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 2,
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Pavel_Derevyanko_%282017-10-03%29_2_%28cropped%29.jpg',
            followed: true,
            fullName: "Nadya",
            status: "Hey Ho",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 3,
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Pavel_Derevyanko_%282017-10-03%29_2_%28cropped%29.jpg',
            followed: true,
            fullName: "Kolya",
            status: "Trener",
            location: {city: "Moskow", country: "Russia"}
        },
        {
            id: 4,
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Pavel_Derevyanko_%282017-10-03%29_2_%28cropped%29.jpg',
            followed: false,
            fullName: "Anton",
            status: "You you",
            location: {city: "Kiev", country: "Ukraine"}
        },
    ]
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