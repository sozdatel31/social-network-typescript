import React from "react"
import {UserType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";


type UsersComponentPropsType = {
    users: UserType,
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    followingIsProgress: Array<number>
}

let User = (props: UsersComponentPropsType) => {
    const u = props.users
    return (

        <div>
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


export default User