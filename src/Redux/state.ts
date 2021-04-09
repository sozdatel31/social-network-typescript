export type StoreType = {
    _state: RootStateType
    _subscriber: (observer: () => void) => void;
    updateNewPostText: (newText: string) => void;
    addPost: (message: string) => void;
    rerenderEntireTree: () => void;
    getState: () => RootStateType;
    dispatch: (action: ActionType) => void;
}
export type ActionType = AddPostActionType | UpdateNewTextActionType | AddMessageActionType | UpdateNewMessageActionType
type AddMessageActionType = {
    type: "ADD-MESSAGE"
    messageText: string
}
type UpdateNewMessageActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT",
    newMessageText: string
}
type AddPostActionType = {
    type: "ADD-POST",
    postText: string
}
type UpdateNewTextActionType = {
    type: "UPDATE-NEW-POST-TEXT",
    newText: string
}
export const addPostAC = (postText: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        postText: postText
    }
}
export const UpdateTextPostAC = (newText: string): UpdateNewTextActionType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    }
}
export const addMessageAC = (messageText: string): AddMessageActionType => {
    return {
        type:"ADD-MESSAGE",
        messageText: messageText
    }
}
export const UpdateMessagePostAC = (newMessage: string): UpdateNewMessageActionType => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newMessageText: newMessage
    }
}
const store: StoreType = {
    _state: {
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
            changeMessageText: "",
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
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.changePostText = newText
        this.rerenderEntireTree()
    },
    addPost(message: string) {
        let newPost: PostType = {
            id: new Date().getTime(),
            message: message,
            likesCount: 0
        }
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.changePostText = "";
        this.rerenderEntireTree()
    },
    rerenderEntireTree() {
    },
    _subscriber(observer) {
        this.rerenderEntireTree = observer;
    },
    getState() {
        return this._state
    },

    dispatch(action) { //type: "ADD-POST"
        if (action.type === "ADD-POST") {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.changePostText = "";
            this.rerenderEntireTree()
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.changePostText = action.newText
            this.rerenderEntireTree()
        } else if (action.type === "ADD-MESSAGE") {
            let newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.messageText
            }
            this._state.dialogsPage.messageData.push(newMessage);
            this._state.dialogsPage.changeMessageText = "";
            this.rerenderEntireTree();
        } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            this._state.dialogsPage.changeMessageText = action.newMessageText
            this.rerenderEntireTree()
        }
    }
}


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
    changeMessageText: string
}
type sidebarType = {}
export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: sidebarType
}

export default store;