import React from "react";
import {addMessageAC, dialogsPageTypes, UpdateMessagePostAC} from "../../Redux/dialogs-reducer";
import {AppStateType} from "../../Redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { Dispatch } from "redux";

// export type dialogsPageType = {
//     store: typeof store;
// }

// function DialogsContainer(props: dialogsPageType) {
//
//     const state = props.store.getState();
//     const AddMessage = (currentMessageText: string) => {
//         props.store.dispatch(addMessageAC(currentMessageText));
//     }
//     const updateNewMessageText = (text: string) => {
//         const action = UpdateMessagePostAC(text);
//         props.store.dispatch(action)
//     }
//     return (
//         <Dialogs dialogsData={state.dialogsPage.dialogsData}
//                  messageData={state.dialogsPage.messageData}
//                  changeMessageText={state.dialogsPage.changeMessageText}
//                  updateMessageText={updateNewMessageText}
//                  addMessage={AddMessage}/>
//     )
// }
type MapStateToPropsType = {
    dialogsPage: dialogsPageTypes
}
type MapDispatchPropsType = {
    updateMessageText: (text: string) => void
    addMessage: (currentMessageText: string) => void
}
export type DialogsContainerType = MapStateToPropsType & MapDispatchPropsType
const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
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
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;

// const connect1 = (mstp:(state: AppStateType)=>MapStateToPropsType,mdtp:(dispatch: Dispatch)=>MapDispatchPropsType) => {
//     return (Component: React.ComponentType) => {
//         return <Context>
//             {store => <Component {...mstp(store.getState())} {...mdtp(store.dispatch.bind(store))}/>}
//         </Context>
//     }
// }