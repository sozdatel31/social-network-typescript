import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return(<div>
        <div className={s.ava}><img src="https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg"/></div>
        <div className={s.fon}><img src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"/></div>
        <div>ava + description</div>
        <MyPosts/>
    </div>)
}

export default Profile;