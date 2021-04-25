import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsСontainer from "./MyPosts/MyPostsContainer";

// type profilePropsPAgeType = {
//     store: typeof store
   //  postData: Array<PostType>
   // // addPost: (message: string) => void
   //  changePostText: string
   // // updateNewPostText: (newText: string) => void
   //  dispatch: (action: ActionType) => void
// }

function Profile() {
    return (<div>
        <ProfileInfo/>
        <MyPostsСontainer //store={props.store}
            // postData={props.postData}
            // //addPost={props.addPost}
            //      dispatch={props.dispatch}
            //      changePostText={props.changePostText}
            //     // updateNewPostText={props.updateNewPostText}
        />
    </div>)
}

export default Profile;