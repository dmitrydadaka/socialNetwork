import { instance,responseType } from "./api"



type meResponseDataType = {
    id: number
    email: string
    login: string


}
type loginResponseType = {
    userId: number
}
export enum resultCodesEnum {
    Success = 0,
    Error = 1

}
export enum resultCodeForCaptcha {
    CaptchaIsRequired = 10

}

export const authAPI = {
    me() {
        return instance.get<responseType<meResponseDataType>>("auth/me").then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false, captcha = null) {
        return instance.post<responseType<loginResponseType, resultCodesEnum|resultCodeForCaptcha>>(`auth/login`, { email, password, rememberMe, captcha }).then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    }

}