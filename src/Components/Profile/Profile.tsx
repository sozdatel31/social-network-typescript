import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post, {PostPropsType} from "./MyPosts/Post/Post";
type postPropsType = {
    postData: Array<PostPropsType>
}

function Profile(props: postPropsType) {
    return (<div>
        <ProfileInfo/>
        <MyPosts postData={props.postData}/>
    </div>)
}

export default Profile;