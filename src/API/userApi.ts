import { AxiosPromise } from "axios";
import { photosType } from "../components/types/types";
import { instance,getItemsType, responseType } from "./api";
/* export type getUserAPIType={
    items:{
        name:string
        id:number
        photos:photosType
        status:string
        followed:boolean
    }
    totalCount:number,
    error:string|null
} */
export const UsersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<getItemsType>(`users?page=${currentPage}&count=${pageSize}`).then(res=>res.data)

    },
    unfollowFriends(userId: number) {
        return instance.delete(`follow/${userId}`).then(res=>res.data) as Promise<responseType>
    },
    followFriends(userId: number) {
        return instance.post<responseType>(`follow/${userId}`, {}).then(res=>res.data)

    }

};