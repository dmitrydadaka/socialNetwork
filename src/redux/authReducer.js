import { authAPI } from "../API/api";
import { stopSubmit } from "redux-form";

const setUserData = "setUserData";


let startState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};
const authReducer = (state = startState, action) => {
    switch (action.type) {
        case setUserData:

            return {
                ...state,
                ...action.payload,

            };

        default:
            return state;
    }
};
export const setAuthUserData = (userId, email, login, isAuth) =>
    ({ type: setUserData, payload: { userId, email, login, isAuth } });


export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
    /*  .then(response => { */
    if (response.data.resultCode === 0) {
        let
            { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }

    return "vau";
};

export const login = (email, password, rememberMe) => async (dispatch) => {
    /*  let action=stopSubmit("login", {_error:"CommonError"});
             dispatch(action) */

    let response = await authAPI.login(email, password, rememberMe)
    /* .then(response => { */
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error"
        dispatch(stopSubmit("login", { _error: message }))
    }


};
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }


};



export default authReducer;