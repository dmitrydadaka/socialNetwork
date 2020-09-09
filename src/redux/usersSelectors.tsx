import { createSelector } from "reselect"
import {appStateType} from "./reduxStoreNew"

export const getUsersForProfile=(state:appStateType)=>{
    return state.usersPage.users;
}
/* export const getUsersSelector=(state)=>{
    return getUsersForProfile(state).filter(u=>true)
} */
export const getUsersSuperSelector=createSelector(getUsersForProfile,  (users)=>{
    return users.filter(u=>true)
})

export const getPageSize=(state:appStateType)=>{
    return state.usersPage.pageSize
} 
export const getTotalUsersCount=(state:appStateType)=>{
    return state.usersPage.totalUsersCount
} 
export const getIsFetching=(state:appStateType)=>{
    return state.usersPage.isFetching
} 
export const getFollowingInProgress=(state:appStateType)=>{
    return state.usersPage.followingInProgress
}
export const getCurrentPage=(state:appStateType)=>{
    return state.usersPage.currentPage
}