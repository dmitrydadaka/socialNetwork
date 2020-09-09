import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import  thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";

let rootReducer = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        friendsPage: friendsReducer,
        usersPage: usersReducer,
        auth: authReducer,
        app:appReducer,
        form: formReducer
    }
)
type rootReducerType=typeof rootReducer// (globalthis:appStateType)=>appStateType)
export type appStateType= ReturnType<rootReducerType>
//@ts-ignore

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunkMiddleware) ))
//const store = createStore(reducers, applyMiddleware(thunkMiddleware));
//@ts-ignore
window._store_ = store
export default store