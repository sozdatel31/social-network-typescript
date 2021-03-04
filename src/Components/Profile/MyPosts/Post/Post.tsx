import React from "react";
import s from "./Post.module.css"
type PostPropsType = {
    message: string;
    like: number | string;
}

function Post(props: PostPropsType) {
    return (

        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"/>
            {props.message}
            <div>{props.like}</div>

        </div>

    )
}

export default Post;