import React from "react";
import {addMessageAC, dialogsPageTypes} from "../../Redux/dialogs-reducer";
import {AppStateType} from "../../Redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";


type MapStateToPropsType = {
    dialogsPage: dialogsPageTypes
    isAuth: boolean
}
type MapDispatchPropsType = {
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
        addMessage: (text: string)=> {
            dispatch(addMessageAC(text))
        }
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect,
    )(Dialogs)
