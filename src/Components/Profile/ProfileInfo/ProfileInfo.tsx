import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/preloader/Preloader";
import {ProfileType, updateStatusProfile} from "../../../Redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoType = {
    profile: ProfileType | undefined
    status: string
    updateStatusProfile: (status: string) => void
}

function ProfileInfo(props: ProfileInfoType) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (

        <div>
            {/*<div className={s.fon}><img alt={"fon"} src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"/></div>*/}
            <div className={s.descriptionBlock}>
                <img alt={"avatar"} src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatusProfile={props.updateStatusProfile}/>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.contacts.website}</div>
                <div>{props.profile.contacts.github}</div>
                <div>{props.profile.contacts.instagram}</div>
                <div>{props.profile.contacts.youtube}</div>
                <div>{props.profile.contacts.vk}</div>
                <div>{props.profile.contacts.twitter}</div>
                <div>{props.profile.contacts.mainLink}</div>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.lookingForAJob? "ищу" : "не ищу"}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;