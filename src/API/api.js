import * as axios from "axios";
import { saveProfile } from "../redux/profileReducer";

const instance = axios.create(
    { 
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        headers: {
            "API-KEY": "1dffc49c-e668-4c39-b402-3387832efdf9"
        }
    }
)
export const UsersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)

    },
    unfollowFriends(userId) {
        return instance.delete(`follow/${userId}`)
    },
    followFriends(userId) {
        return instance.post(`follow/${userId}`, {})

    },
    getProfile(userId) {
        console.warn("Obsolete method. Please, use profileAPI object!")
        return profileAPI.getProfile(userId);
    }

};
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status:status})
    },
    savePhoto(photofile){
        const formData= new FormData ();
        formData.append("image", photofile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }})
    },
    saveProfile(profile){
        return instance.put(`profile`, profile)
    },

};


export const authAPI = {
    me() {
        return instance.get("auth/me")
    },
    login(email, password, rememberMe=false) {
        return instance.post(`auth/login`,{email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }

}
