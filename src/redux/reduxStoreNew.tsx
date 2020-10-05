import {applyMiddleware, combineReducers, createStore, compose, Action} from "redux";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import  thunkMiddleware, { ThunkAction } from "redux-thunk";
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
//export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

//export type PropertiesTypes <T> = T extends { [keys: string]: (...args:any[]) =>infer U  }? U : never
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

//export type InferActionsTypes<T>=T extends  {[keys:string]:(...args:any[])=>infer U}?U:never
export type baseThunkType<A extends Action=Action>=ThunkAction<void, appStateType, unknown, A>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunkMiddleware) ))
//const store = createStore(reducers, applyMiddleware(thunkMiddleware));
//@ts-ignore
window._store_ = store
export default store