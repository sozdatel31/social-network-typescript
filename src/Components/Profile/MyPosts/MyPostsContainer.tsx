import React from "react";

import {addPostAC, PostType, UpdateTextPostAC} from "../../../Redux/profile-reducer";
import {AppStateType} from "../../../Redux/redux-store";
import MyPosts from "./MyPosts";
import {Dispatch} from "redux";
import {connect} from "react-redux";


export type profilePageType = {
    postData: Array<PostType>
}


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