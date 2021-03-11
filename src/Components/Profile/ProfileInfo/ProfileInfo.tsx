import React from "react";
import s from "./ProfileInfo.module.css"

function ProfileInfo() {
    return (
        <div>
            <div className={s.fon}><img src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"/></div>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    )
}

export default ProfileInfo;