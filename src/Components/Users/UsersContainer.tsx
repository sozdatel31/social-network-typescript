import React from "react"
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    usersPage: InitialStateType
}
type MapDispatchPropsType = {
    follow: (userID: number)=> void
    unfollow: (userID: number)=> void
    setUsers: (users: Array<UserType>)=> void
}
export type UsersPropsType = MapDispatchPropsType & MapStatePropsType
const mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)