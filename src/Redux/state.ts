import {rerenderEntireTree} from "../render";

export type MessageType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type profilePageType = {
    postData: Array<PostType>
    changePostText: string
}
export type dialogsPageType = {
    dialogsData: Array<DialogsType>
    messageData: Array<MessageType>
}
type sidebarType = {}
export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: sidebarType
}
export const addPost = (message: string) => {
    let newPost: PostType = {
        id: new Date().getTime(),
        message: message,
        likesCount: 0
    }
    state.profilePage.postData.push(newPost);
    state.profilePage.changePostText = "";
    rerenderEntireTree(state)
}
export const updateNewPostText = (newText: string) => {
 state.profilePage.changePostText = newText
    rerenderEntireTree(state)
}
const state: RootStateType = {
    profilePage: {
        changePostText: "",
        postData: [
            {id: 1, message: "Hello world", likesCount: 99},
            {id: 2, message: "Hey, Arnold", likesCount: 27},
            {id: 3, message: "How are you", likesCount: 77},
            {id: 4, message: "what's up, men", likesCount: 27},
            {id: 5, message: "Hello, Incubatornye", likesCount: 54}
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: "Nadya"},
            {id: 2, name: "Kolya"},
            {id: 3, name: "Antony"},
            {id: 4, name: "Ivan"},
            {id: 5, name: "Victor"},
            {id: 6, name: "Pavel"}],
        messageData: [
            {id: 1, message: "yo"},
            {id: 2, message: "MEOWWW"},
            {id: 3, message: "MM?"},
            {id: 4, message: "hey yo"},
            {id: 5, message: "MEOWWW"},
            {id: 6, message: "MEOWWW"},
            {id: 7, message: "MEOWWW"},
            {id: 8, message: "MEOWWW"}
        ]
    },
    sidebar: {}
}

export default state;