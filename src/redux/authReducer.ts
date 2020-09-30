import { authAPI, resultCodeForCaptcha, resultCodesEnum } from "../API/authApi";
import { securityAPI } from "../API/securityApi";

import { FormAction, stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { appStateType, baseThunkType, InferActionsTypes } from "./reduxStoreNew";
import { Dispatch } from "react";

/* const setUserData = "setUserData";
const getCaptchaUrlSuccess = "getCaptchaUrlSuccess"; */

export type initialStateType2 = {
    userId: number|null,    
    email: string|null ,
    login: string|null,
    isAuth: boolean,
    captchaUrl:string|null // if null then captcha is not required
};

let initialState:initialStateType2 = {
    userId: null as number|null,
    email: null as string|null,
    login: null as string|null,
    isAuth: false as boolean,
    captchaUrl: null as string|null // if null then captcha is not required
};
export type initialStateType= typeof initialState 

const authReducer = (state = initialState, action:actionTypes):initialStateType=> {
    switch (action.type) {
        case 'SN/auth/SET_USER_DATA':
        case 'SN/auth/GET_CAPTCHA_URL_SUCCESS':

            return {
                ...state,
                ...action.payload,

            };

        default:
            return state;
    }
};
/* type setAuthUserDataPayloadType={
    userId:number|null,
    email:string|null,
    login:string|null,
    isAuth:boolean
} */
/* export type setAuthUserDataType={
    type:typeof setUserData,
    payload:setAuthUserDataPayloadType
} */

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'SN/auth/SET_USER_DATA', payload: {userId, email, login, isAuth}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'SN/auth/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}
    } as const)
}
/* export const setAuthUserData = (userId:number|null, email:string|null,
     login:string|null, isAuth:boolean|null) =>
    ({ type: 'SN/auth/SET_USER_DATA', payload: { userId, email, login, isAuth } }); */
//type  getCapcthaUrlSuccessSuccessACPayloadType={


/* type getCaptchaUrlSuccessACType={
    type: typeof 'SN/auth/GET_CAPTCHA_URL_SUCCESS'
    payload:{captchaUrl:string}
} */
/* export const getCaptchaUrlSuccessAC = (captchaUrl:string) =>
    ({ type: 'SN/auth/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl} }); */


export const getAuthUserData = ():thunkType => async (dispatch) => {
    let meData = await authAPI.me()
    //response.data.data.login
    /*  .then(response => { */
    if (meData.resultCode === resultCodesEnum.Success) {
        let { id, email, login } = meData.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }

    return "vau";
};

export const login = (email:string, password:string,
     rememberMe:boolean, captcha:null|undefined):thunkType => async (dispatch) => {
    /*  let action=stopSubmit("login", {_error:"CommonError"});
             dispatch(action) */
    let loginData = await authAPI.login(email, password, rememberMe, captcha)
    /* .then(response => { */
    if (loginData.resultCode === resultCodesEnum.Success) {
        dispatch(getAuthUserData());
    } else  {
        if(loginData.resultCode===resultCodeForCaptcha.CaptchaIsRequired){dispatch(getCaptchaUrl())}
        let message = loginData.messages.length > 0 ? loginData.messages[0] : "some error"
        dispatch(stopSubmit("login", { _error: message }))
    }


};
export const logout = ():thunkType => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false));
    }


};
export const getCaptchaUrl = ():thunkType => async (dispatch) => {


    const data = await securityAPI.getCaptchaUrl();

    const captchaUrl = data.url
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))



};

type actionTypes=InferActionsTypes<typeof actions>

type thunkType= baseThunkType <actionTypes| FormAction>

export default authReducer;