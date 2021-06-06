import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

import {MyPostContainerType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormsControls";

type FormDataType = {
    newPostBody: string,
}

function MyPosts(props: MyPostContainerType) {
    const postElement = props.profilePage.postData.map((p) => {
        return <Post id={p.id} likesCount={p.likesCount} message={p.message}/>
    })

    const onAddPost = (formData: FormDataType) => {props.addPost(formData.newPostBody) }

    return (
        <div>
            <AddPostFormRedux onSubmit={onAddPost}/>
            <h3>My posts</h3>
            <div>New post</div>
            <div className={s.item}>
                {postElement}
            </div>
        </div>
    )
}
const maxLength10 = maxLengthCreator(10)
const AddPostForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newPostBody'}
                       placeholder={'Enter post message'}
                        validate={[requiredField, maxLength10]}
                />
            </div>
            <div>
                <button>add Post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm<FormDataType>({form: 'dialogAddPostForm'})(AddPostForm)

export default MyPosts;