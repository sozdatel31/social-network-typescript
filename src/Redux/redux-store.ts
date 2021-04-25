import {$CombinedState, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import sitebarReducer from "./sitebar-reducer";
import dialogsReducer from "./dialogs-reducer";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sitebarReducer
})


export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);

