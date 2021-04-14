import {$CombinedState, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import sitebarReducer from "./sitebar-reducer";
import dialogsReducer from "./dialogs-reducer";
import {ActionType, dialogsPageType, profilePageType, RootStateType} from "./store";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sitebarReducer
})

let store = createStore(reducers);



export default store;