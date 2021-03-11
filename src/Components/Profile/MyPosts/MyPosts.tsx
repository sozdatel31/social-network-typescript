import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>add post</button>
            </div>
            <h3>My posts</h3>
            <div>New post</div>
            <Post message="Hello world" like={"like = " + 5}/>
            <Post message="Hey, Arnold" like={"like = " + 10}/>
            <Post message="How are you" like={"like = " + 15}/>
            <Post message="what's up, men" like={"like = " + 20}/>
        </div>
    )
}

export default MyPosts;