import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileType} from "../../Redux/profile-reducer";
import {FormDataProfileType} from "./ProfileInfo/ProfileDataForm";

type ProfilePropsType = {
    profile?: ProfileType | undefined,
    status: string,
    updateStatusProfile: (status:string) => void
    isOwner: boolean
    savePhoto: (arg0: File) => void
    saveProfile: (dataForm: FormDataProfileType)=> void & Promise<string>
}

function Profile(props: ProfilePropsType) {

    return (<div>
        <ProfileInfo savePhoto={props.savePhoto}
                     isOwner={props.isOwner}
                     profile={props.profile}
                     status={props.status}
                     saveProfile={props.saveProfile}
                     updateStatusProfile={props.updateStatusProfile}/>
        <MyPostsContainer
        />
    </div>)
}

export default Profile;