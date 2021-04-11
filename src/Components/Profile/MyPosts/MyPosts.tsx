import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionType, PostType} from "../../../Redux/state";
import {addPostAC, UpdateTextPostAC} from "../../../Redux/profile-reducer";

type myPostsPropsType = {
    postData: Array<PostType>
    // addPost: (message: string) => void
    changePostText: string
    //updateNewPostText: (newText: string) => void
    dispatch: (action: ActionType) => void
}

function MyPosts(props: myPostsPropsType) {
    const postElement = props.postData.map((p) => {
        return <Post id={p.id} likesCount={p.likesCount} message={p.message}/>
    })

    const onAddPost = () => {
        props.dispatch(addPostAC(props.changePostText))

    }
    return (
        <div>
            <div>
                <textarea
                    onChange={(e) => {
                        props.dispatch(UpdateTextPostAC((e.currentTarget.value)))
                    }}
                    //onChange={(e)=>{props.updateNewPostText(e.currentTarget.value)}
                    value={props.changePostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>add post</button>
            </div>
            <h3>My posts</h3>
            <div>New post</div>
            <div className={s.item}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;