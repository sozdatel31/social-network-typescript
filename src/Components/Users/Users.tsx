import React from "react"
import {UserType} from "../../Redux/users-reducer";
import {Paginator} from "./Paginator";
import User from "./User";
import ReactPaginate from "react-paginate";

type UsersComponentPropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    users: Array<UserType>,
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    followingIsProgress: Array<number>
}

let Users = (props: UsersComponentPropsType) => {

    return <div>
        <Paginator currentPage={props.currentPage}
                   totalUsersCount={props.totalUsersCount}
                   onPageChanged={props.onPageChanged}
                   pageSize={props.pageSize}
        />
        {
            props.users.map(u => <User follow={props.follow}
                                       followingIsProgress={props.followingIsProgress}
                                       users={u}
                                       unfollow={props.unfollow}
                                       key={u.id}
            />)
        }
    </div>
}


export default Users