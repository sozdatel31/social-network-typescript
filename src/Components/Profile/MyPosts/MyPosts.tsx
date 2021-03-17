import React from "react";
import s from "./MyPosts.module.css"
import Post, {PostPropsType} from "./Post/Post";

function MyPosts() {

    const postData: Array<PostPropsType> = [
        {id: 1, message: "Hello world", likesCount: 99},
        {id: 1, message: "Hey, Arnold", likesCount: 27},
        {id: 1, message: "How are you", likesCount: 77},
        {id: 1, message: "what's up, men", likesCount: 27},
        {id: 1, message: "Hello, Incubatornye", likesCount: 54}
    ]
    const postElement = postData.map((p)=> {return  <Post id={p.id} likesCount={p.likesCount} message={p.message}/>})
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
            <div className={s.item}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;