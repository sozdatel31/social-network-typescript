import React from "react"
import s from "./Users.module.css"
import {UserType} from "../../Redux/users-reducer";


type UsersComponentPropsType = {
    totalUsersCount: number,
pageSize: number,
currentPage: number,
onPageChanged: (pageNumber: number)=> void,
users: Array<UserType>,
follow: (userID: number) => void,
unfollow: (userID: number) => void,
}

let Users = (props:UsersComponentPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i)
    }

        return <div>
            <div>
            {pages.map(m => {
               return <span className={props.currentPage === m? s.selectedPage : ""} onClick={()=> {props.onPageChanged(m)}}>{m + " "}</span>
            })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img alt={"avatar"} src={u.photos.small !=null? u.photos.small : "https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png"}/>
                </div>
<div>
    { u.followed
        ? <button onClick={()=> {props.unfollow(u.id)}}> Unfollow </button>
        : <button onClick={()=> {props.follow(u.id)}}> Follow</button>}

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