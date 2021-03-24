import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType, profilePageType} from "../../Redux/state";

type profilePropsPAgeType = {
    postData: Array<PostType>
    addPost: (message: string) => void
}
function Profile(props: profilePropsPAgeType) {
    return (<div>
        <ProfileInfo/>
        <MyPosts postData={props.postData} addPost={props.addPost}/>
    </div>)
}

export default Profile;