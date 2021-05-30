import React from "react"
import s from "./Users.module.css"
import {UserType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import {followUsers, unfollowUsers} from "../../api/api";


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
    debugger
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>


        {pages.map(m => {
            return <span className={props.currentPage === m ? s.selectedPage : ""} onClick={() => {
                props.onPageChanged(m)
            }}>{m + " "}</span>
        })}

        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/Profile/' + u.id}>
                    <img alt={"avatar"}
                         src={u.photos.small != null ?
                             u.photos.small : "https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png"}/>
                    </NavLink>
                </div>
<div>
    {u.followed
        ? <button disabled={props.followingIsProgress.some(id => id === u.id)} onClick={() => {
            props.unfollow(u.id)
        }}> Unfollow </button>
        : <button disabled={props.followingIsProgress.some(id => id === u.id)} onClick={() => {
            props.follow(u.id)
        }}> Follow</button>}

</div>
            </span>
                <span>
                    <div>
                        {u.name}
                    </div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div> {"u.location.country"}</div>
                    <div> {"u.location.city"}</div>
                </span>
            </div>)
        }
    </div>
}


export default Users