import axios from "axios";
import {  userType } from "../components/types/types";
import Axios from "axios";

export const instance = axios.create(
    {
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        headers: {
            "API-KEY": "1dffc49c-e668-4c39-b402-3387832efdf9"
        }
    }
)
export type responseType<D = {}, RS = resultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RS
}
export enum resultCodesEnum {
    Success = 0,
    Error = 1

}
export enum resultCodeForCaptcha {
    CaptchaIsRequired = 10

}
export type getItemsType={
    items:Array<userType>
    error:string|null
    totalCount:number

}










/* export type getUserAPIType={
    items:{
        name:string
        id:number
        photos:photosType
        status:string
        followed:boolean
    }
    totalCount:number,
    error:any
}
export const UsersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<getUserAPIType>(`users?page=${currentPage}&count=${pageSize}`).then(res=>res.data)

    },
    unfollowFriends(userId: number) {
        return instance.delete(`follow/${userId}`).then(res=>res.data)
    },
    followFriends(userId: number) {
        return instance.post<getUserAPIType>(`follow/${userId}`, {}).then(res=>res.data)

    },
    getProfile(userId: number) {
        console.warn("Obsolete method. Please, use profileAPI object!")
        return profileAPI.getProfile(userId);
    }

};
export type getUserIdProfileAPIType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
    aboutMe:string
}
export type putStatusProfileAPIType = {
    resultCode: resultCodesEnum
    messages: Array<string>
    data: {
        status: string
    }
}
export type putPhotoProfileAPIType = {
    data: {
        photos:{

        small: string
        large: string
        }
    }
    resultCode: resultCodesEnum
    messages: Array<string>
}
export type putProfileProfileAPIType = {
    data:{

        profile:profileType
}
resultCode: resultCodesEnum
messages: Array<string>
    }
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<getUserIdProfileAPIType>(`profile/` + userId).then(res=>res.data)
    },
    getStatus(userId: number) {
        return instance.get<any>(`profile/status/${userId}`).then(res=>res.data)
    },
    updateStatus(status: string) {
        return instance.put<putStatusProfileAPIType>(`profile/status`, { status: status }).then(res=>res.data)
    },
    savePhoto(photofile: any) {
        const formData = new FormData(); 
        formData.append("image", photofile);

        return instance.put<putPhotoProfileAPIType>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: any) {
        return instance.put<putProfileProfileAPIType>(`profile`, profile).then(res=>res.data)
    },

};

type meResponseType = {
    data: {
        id: number
        email: string
        login: string

    }
    resultCode: resultCodesEnum
    messages: Array<string>
}
type loginResponseType = {
    data: {
        userId: number
    }
    resultCode: resultCodesEnum | resultCodeForCaptcha
    messages: Array<string>
} */

/* export const authAPI = {
    me() {
        return instance.get<meResponseType>("auth/me").then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false, captcha = null) {
        return instance.post<loginResponseType>(`auth/login`, { email, password, rememberMe, captcha }).then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    }

} */
//instance.get<string>("auth/me").then((res:AxiosResponse<string>)=>res.data.toUpperCase)
/* export const securityAPI = {
    getCaptchaUrl() {
        return instance.get("security/get-captcha-url");

    }

} */
