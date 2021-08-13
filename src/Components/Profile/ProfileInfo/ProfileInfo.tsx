import React, {useState} from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/preloader/Preloader";
import {ProfileType} from "../../../Redux/profile-reducer";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import ProfileDataForm, {FormDataProfileType} from "./ProfileDataForm";

type ProfileInfoType = {
    profile: ProfileType | undefined
    status: string
    updateStatusProfile: (status: string) => void
    isOwner: boolean
    savePhoto: (arg0: File) => void
}


function ProfileInfo(props: ProfileInfoType) {

    let [editMode, setEditMode] = useState<boolean>(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length != null) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (DataForm: FormDataProfileType) => {
        console.log(DataForm)
    }
    return (

        <div>
            <div className={s.descriptionBlock}>
                <img alt={"avatar"}
                     src={props.profile.photos.large || "https://offvkontakte.ru/wp-content/uploads/avatarka-pustaya-vk_0.jpg"}/>
                {props.isOwner && <div><input type="file" onChange={onMainPhotoSelected}/></div>}
                <ProfileStatusWithHook status={props.status} updateStatusProfile={props.updateStatusProfile}/>

                {editMode
                ?<ProfileDataForm onSubmit={onSubmit}/>
                    :<ProfileData toActivateEditMode={()=>setEditMode(true)} profile={props.profile} isOwner={props.isOwner}/>}


            </div>
        </div>
    )
}

type ContactType = {
    contactTitle: string,
    contactValue: string
}

const ProfileData = ({profile, isOwner, toActivateEditMode}:
                         { profile: ProfileType,
                             isOwner: boolean,
                         toActivateEditMode: ()=> void
                         }) => {
    return <div>
        {isOwner && <div>
            <button onClick={toActivateEditMode}>edit</button>
        </div>}
        <div><b>About ME:</b>{profile.aboutMe}</div>
        <b>Contacts :</b> {Object.keys(profile.contacts ? profile.contacts : {}).map(key => {
        // @ts-ignore
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
    })
    }

        <div>{profile.fullName}</div>
        <div>{profile.lookingForAJob ? "ищу" : "не ищу"}</div>
        <div>{profile.lookingForAJobDescription}</div>
    </div>
}


const Contact = ({contactTitle, contactValue}: ContactType) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;