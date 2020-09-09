import { authAPI, securityAPI } from "../API/api";
import { stopSubmit } from "redux-form";

const setUserData = "setUserData";
const getCaptchaUrlSuccess = "getCaptchaUrlSuccess";

export type initialStateType2 = {
    userId: number|null,    
    email: string|null ,
    login: string|null,
    isAuth: boolean|null,
    captchaUrl:string|null // if null then captcha is not required
};

let initialState:initialStateType2 = {
    userId: null as number|null,
    email: null as string|null,
    login: null as string|null,
    isAuth: false as boolean|null,
    captchaUrl: null as string|null // if null then captcha is not required
};
export type initialStateType= typeof initialState 
const authReducer = (state = initialState, action:any):initialStateType=> {
    switch (action.type) {
        case setUserData:
        case getCaptchaUrlSuccess:

            return {
                ...state,
                ...action.payload,

            };

        default:
            return state;
    }
};
type setAuthUserDataPayloadType={
    userId:number|null,
    email:string|null,
    login:string|null,
    isAuth:boolean|null
}
type setAuthUserDataType={
    type:typeof setUserData,
    payload:setAuthUserDataPayloadType
}
export const setAuthUserData = (userId:number|null, email:string|null,
     login:string|null, isAuth:boolean|null):setAuthUserDataType =>
    ({ type: setUserData, payload: { userId, email, login, isAuth } });
//type  getCapcthaUrlSuccessSuccessACPayloadType={


type getCaptchaUrlSuccessACType={
    type: typeof getCaptchaUrlSuccess,
    payload:{captchaUrl:string}
}
export const getCaptchaUrlSuccessAC = (captchaUrl:string): getCaptchaUrlSuccessACType =>
    ({ type: getCaptchaUrlSuccess, payload: {captchaUrl} });


export const getAuthUserData = () => async (dispatch:any) => {
    let response = await authAPI.me()
    /*  .then(response => { */
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }

    return "vau";
};

export const login = (email:number, password:string,
     rememberMe:boolean, captcha:string) => async (dispatch:any) => {
    /*  let action=stopSubmit("login", {_error:"CommonError"});
             dispatch(action) */

    let response = await authAPI.login(email, password, rememberMe, captcha)
    /* .then(response => { */
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else  {
        if(response.data.resultCode===10){dispatch(getCaptchaUrl())}
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error"
        dispatch(stopSubmit("login", { _error: message }))
    }


};
export const logout = () => async (dispatch:any) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }


};
export const getCaptchaUrl = () => async (dispatch:any) => {


    const response = await securityAPI.getCaptchaUrl();

    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccessAC(captchaUrl))



};



export default authReducer;