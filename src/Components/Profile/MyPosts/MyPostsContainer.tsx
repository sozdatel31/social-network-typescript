import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

import {addPostAC, UpdateTextPostAC} from "../../../Redux/profile-reducer";
import {AppStateType, store} from "../../../Redux/redux-store";
import MyPosts from "./MyPosts";
import {addMessageAC, dialogsPageTypes, UpdateMessagePostAC} from "../../../Redux/dialogs-reducer";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";
import {PostType} from "../../../Redux/store";
export type profilePageType = {
    postData: Array<PostType>
    changePostText: string
}

type myPostsPropsType = {
    store: typeof store
    // postData: Array<PostType>
    //  addPost: (message: string) => void
    // changePostText: string
    // //updateNewPostText: (newText: string) => void
    // dispatch: (action: ActionType) => void
}

// function MyPostsСontainer(props: myPostsPropsType) {
//     const state = props.store.getState();
//
//     const onAddPost = (currentText: string) => {
//         props.store.dispatch(addPostAC(currentText));
//     }
//     const updateNewPostText = (text: string) => {
//         const action = UpdateTextPostAC(text);
//         props.store.dispatch(action)
//     }
//
//     return (
//         <div>
//             <MyPosts addPost={onAddPost}
//                      updateNewPostText={updateNewPostText}
//                      postData={state.profilePage.postData}
//                      changePostText={state.profilePage.changePostText}
//             />
//         </div>
//     )
// }
type MapStateToPropsType = {
    profilePage: profilePageType
}
type MapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: (currentText: string) => void
}
export type MyPostContainerType = MapStateToPropsType & MapDispatchPropsType
let mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        updateNewPostText: (text: string)=> {
            dispatch(UpdateTextPostAC(text));
        },
        addPost: (currentText: string)=> {
            dispatch(addPostAC(currentText))
        }

    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;