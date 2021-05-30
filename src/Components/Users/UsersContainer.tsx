import React from "react"
import {connect} from "react-redux";

import {
    followAC, followThunkCreator, getUsersThunkCreator,
    InitialStateUsersType,
    setCurrentPageAC, setToggleIsFetchingAC, setToggleIsFollowingProgressAC,
    setUsersAC, setUsersTotalCountAC,
    unfollowAC, unfollowThunkCreator, UsersActionType,
    UserType
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import Preloader from "../common/preloader/Preloader";
import {getUsers} from "../../api/api";
import Users from "./Users";

type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
    followingIsProgress: Array<number>

}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    followingProgress: (isFetching: boolean, userId: number) => void
    getUsers: any
}

export type UsersPropsType = MapDispatchPropsType & MapStatePropsType

class UsersContainer extends React.Component<UsersPropsType, UserType> {

    componentDidMount(): void {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNumber: number): void => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingIsProgress={this.props.followingIsProgress}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): InitialStateUsersType => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        followingIsProgress: state.usersPage.followingIsProgress
    }
}

const mapDispatchToProps = (dispatch: any): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
             dispatch(followThunkCreator(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowThunkCreator(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setUsersTotalCountAC(totalUsersCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(setToggleIsFetchingAC(isFetching))
        },
        followingProgress: (isFetching: boolean, userId: number) => {
            dispatch(setToggleIsFollowingProgressAC(isFetching, userId))
        },
        getUsers: (currentPage: number, pageSize: number) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        },
    }
}
export default connect<MapStatePropsType, MapDispatchPropsType, any, AppStateType>(mapStateToProps, mapDispatchToProps)(UsersContainer)