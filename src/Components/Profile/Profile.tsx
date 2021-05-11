import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {profilePageType} from "../../Redux/profile-reducer";


function Profile(props: profilePageType) {
    return (<div>
        <ProfileInfo profile={props.profile} />
        <MyPostsContainer
        />
    </div>)
}

export default Profile;