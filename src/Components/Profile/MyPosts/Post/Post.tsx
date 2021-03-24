import React from "react";
import s from "./Post.module.css"
import {PostType} from "../../../../Redux/state"


function Post(props: PostType) {
    return (

        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"/>
            {props.message}
            <div>likes {props.likesCount}</div>

        </div>

    )
}

export default Post;