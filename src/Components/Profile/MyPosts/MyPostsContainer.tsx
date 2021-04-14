import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionType, PostType} from "../../../Redux/store";
import {addPostAC, UpdateTextPostAC} from "../../../Redux/profile-reducer";
import store from "../../../Redux/redux-store";
import MyPosts from "./MyPosts";

type myPostsPropsType = {
    store: typeof store
    // postData: Array<PostType>
    //  addPost: (message: string) => void
    // changePostText: string
    // //updateNewPostText: (newText: string) => void
    // dispatch: (action: ActionType) => void
}

function MyPostsСontainer(props: myPostsPropsType) {
    const state = props.store.getState();

    const onAddPost = (currentText: string) => {
        props.store.dispatch(addPostAC(currentText));
    }
    const updateNewPostText = (text: string) => {
        const action = UpdateTextPostAC(text);
        props.store.dispatch(action)
    }

    return (
        <div>
            <MyPosts addPost={onAddPost}
                     updateNewPostText={updateNewPostText}
                     postData={state.profilePage.postData}
                     changePostText={state.profilePage.changePostText}
            />
        </div>
    )
}

export default MyPostsСontainer;