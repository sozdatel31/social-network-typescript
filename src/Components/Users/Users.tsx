import React from "react"
import {UsersPropsType} from "./UsersContainer";


export function Users(props: UsersPropsType) {
if (props.usersPage.users.length === 0) {
    props.setUsers([
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
        }
    ])
}
    return (<div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl}/>
                </div>
<div>
    { u.followed
        ? <button onClick={()=> {props.unfollow(u.id)}}> Unfollow </button>
        : <button onClick={()=> {props.follow(u.id)}}> Follow</button>}

</div>
            </span>
                <span>
                    <div>
                        {u.fullName}
                    </div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div> {u.location.country}</div>
                    <div> {u.location.city}</div>
                </span>
            </div>)
        }
    </div>)
}