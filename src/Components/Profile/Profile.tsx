import React from "react";
import s from "./Profile.module.css"

function Profile() {
    return (<div className={s.content}>
        <div><img src="https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg"/></div>
        <div><img src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"/></div>
        <div>ava + description</div>
        <div>
            My posts
            <div>New post</div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>)
}

export default Profile;