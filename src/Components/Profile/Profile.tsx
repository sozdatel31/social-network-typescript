import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {profilePageType, ProfileType, updateStatusProfile} from "../../Redux/profile-reducer";

type ProfilePropsType = {
    profile?: ProfileType | undefined,
    status: string,
    updateStatusProfile: (status:string) => void
    isOwner: boolean
    savePhoto: (arg0: File) => void
}

function Profile(props: ProfilePropsType) {

    return (<div>
        <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatusProfile={props.updateStatusProfile}/>
        <MyPostsContainer
        />
    </div>)
}

export default Profile;