import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostType} from "../../../Redux/state";

type myPostsPropsType = {
    postData: Array<PostType>
    addPost: (message: string) => void
}

function MyPosts(props: myPostsPropsType) {
    const postElement = props.postData.map((p) => {
        return <Post id={p.id} likesCount={p.likesCount} message={p.message}/>
    })
    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const onAddPost = () => {
        if (newPostElement.current) {
        props.addPost(newPostElement.current.value)
        newPostElement.current.value = ""}


    }
    return (
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
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