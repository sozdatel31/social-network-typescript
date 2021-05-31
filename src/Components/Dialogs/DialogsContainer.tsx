import React from "react";
import {addMessageAC, dialogsPageTypes, UpdateMessagePostAC} from "../../Redux/dialogs-reducer";
import {AppStateType} from "../../Redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { Dispatch } from "redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStateToPropsType = {
    dialogsPage: dialogsPageTypes
    isAuth: boolean
}
type MapDispatchPropsType = {
    updateMessageText: (text: string) => void
    addMessage: (currentMessageText: string) => void
}
export type DialogsContainerType = MapStateToPropsType & MapDispatchPropsType
const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        updateMessageText: (currentMessageText: string)=> {
            dispatch(UpdateMessagePostAC(currentMessageText));
        },
        addMessage: (text: string)=> {
            dispatch(addMessageAC(text))
        }
    }
}

const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))

export default DialogsContainer;