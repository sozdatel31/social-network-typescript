import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>
            <textarea></textarea>
            <button>add post</button>
            <div className={s.item}>My posts</div>
            <div>New post</div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default MyPosts;