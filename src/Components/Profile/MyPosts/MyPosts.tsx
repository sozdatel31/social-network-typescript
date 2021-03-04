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
            <Post message = "Hello world" like={"like = " + 5}/>
            <Post message = "Hey, Arnold" like={"like = " + 10}/>
            <Post message = "How are you" like={"like = " + 15}/>
            <Post message = "what's up, men" like={"like = " + 20}/>
        </div>
    )
}

export default MyPosts;