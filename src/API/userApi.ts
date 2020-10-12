

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
    getUsers(currentPage: number, pageSize: number, term:string, friend:boolean) {
        return instance.get<getItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}&friend=${friend}`).then(res=>res.data)

    },
    unfollowFriends(userId: number) {
        return instance.delete(`follow/${userId}`).then(res=>res.data) as Promise<responseType>
    },
    followFriends(userId: number) {
        return instance.post<responseType>(`follow/${userId}`, {}).then(res=>res.data)

    },
    searchingFriends(term: string) {
        return instance.get(`users/${term}`).then(res=>res.data)

    }

};