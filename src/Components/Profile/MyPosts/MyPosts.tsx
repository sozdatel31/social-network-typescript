import React from "react";
import s from "./MyPosts.module.css"
import Post, {PostPropsType} from "./Post/Post";
type myPostsPropsType = {
    postData: Array<PostPropsType>
}

function MyPosts(props: myPostsPropsType) {
    const postElement = props.postData.map((p)=> {return  <Post id={p.id} likesCount={p.likesCount} message={p.message}/>})
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