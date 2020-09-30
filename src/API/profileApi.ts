import { photosType, profileType } from "../components/types/types";
import { instance,responseType,resultCodesEnum } from "./api";
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
    
           photos:{

        small: string
        large: string
        }
   
        
  
    
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
        return instance.get<profileType>(`profile/` + userId).then(res=>res.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`).then(res=>res.data)
    },
    updateStatus(status: string) {
        return instance.put<responseType>(`profile/status`, { status: status }).then(res=>res.data)
    },
    savePhoto(photofile: any) {
        const formData = new FormData(); 
        formData.append("image", photofile);

        return instance.put<responseType<putPhotoProfileAPIType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: any) {
        return instance.put<putProfileProfileAPIType>(`profile`, profile).then(res=>res.data)
    },

};
