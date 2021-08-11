import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/preloader/Preloader";
import {ProfileType} from "../../../Redux/profile-reducer";
import ProfileStatusWithHook from "./ProfileStatusWithHook";

type ProfileInfoType = {
    profile: ProfileType | undefined
    status: string
    updateStatusProfile: (status: string) => void
    isOwner: boolean
    savePhoto: (arg0: File)=> void
}



function ProfileInfo(props: ProfileInfoType) {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>)=> {
        if (e.target.files?.length != null) {
            props.savePhoto(e.target.files[0])
        }
    }
    return (

        <div>
            <div className={s.descriptionBlock}>
                <img alt={"avatar"} src={props.profile.photos.large || "https://offvkontakte.ru/wp-content/uploads/avatarka-pustaya-vk_0.jpg"}/>
                {props.isOwner && <div><input type="file" onChange={onMainPhotoSelected}/></div>}
                <ProfileStatusWithHook status={props.status} updateStatusProfile={props.updateStatusProfile}/>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.contacts?.facebook}</div>
                <div>{props.profile.contacts?.website}</div>
                <div>{props.profile.contacts?.github}</div>
                <div>{props.profile.contacts?.instagram}</div>
                <div>{props.profile.contacts?.youtube}</div>
                <div>{props.profile.contacts?.vk}</div>
                <div>{props.profile.contacts?.twitter}</div>
                <div>{props.profile.contacts?.mainLink}</div>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.lookingForAJob? "ищу" : "не ищу"}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;