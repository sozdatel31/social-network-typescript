import {$CombinedState, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import sitebarReducer from "./sitebar-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sitebarReducer,
    usersPage: usersReducer
})


export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);

