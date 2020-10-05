import { UsersAPI } from "../API/userApi";
import { updateObjectInArray } from "../utils/objectHelpers";
import {  userType } from "../components/types/types";
import { appStateType, baseThunkType, InferActionsTypes } from "./reduxStoreNew";
import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { getItemsType } from "../API/api";

// const Follow = "Follow";
// const unFollow = "unFollow";
// const setUsers = "setUsers";
// const setCurrentPage = "setCurrentPage";
// const setTotalUsersCount = "setTotalUsersCount";
// const toggleIsFetching = "toggleIsFetching";
// const toggleIsFollowingProgress = "toggleIsFollowingProgress";



const initialState = {
    users: [] as Array<userType>,
    pageSize: 10 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: true as boolean,
    followingInProgress: [] as Array<number>//id users
    //fake: 10
};
const usersReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
/*         case "fake": return{...state, fake:state.fake+1}
 */        case "SN/USERS/Follow":
            return {
                ...state,
                // users:[...state.users] odno i toge
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
                /*  state.users.map(u => {
                    if (u.id === action.userId) {
                                type followingInProgressType={
                        return { ...u, followed: true }
                    }
                    return u
                }) */
            };
        case "SN/USERS/unFollow" :
            return {
                ...state,
                // users:[...state.users] odno i toge
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
                /*  state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                }) */
            };
        case "SN/USERS/setUsers": {
            return { ...state, users: action.users  }//skleivaem 2 spread operator
        }
            ;
        case "SN/USERS/setCurrentPage": {
            return { ...state, currentPage: action.currentPage }

        }
            ;
        case "SN/USERS/setTotalUsersCount": {
            return { ...state, totalUsersCount: action.count }

        }
            ;
        case "SN/USERS/toggleIsFetching": {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case "SN/USERS/toggleIsFollowingProgress": {
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
};
/* type actionTypes=followSuccessType|unfollowSuccessType|setCurrentPageType|setTotalUsersCountType|
setUsersType|toggleIsFetchingType|toggleIsFollowingProgressType */
export const actions = {


    followSuccess: (userId: number) => ({ type: "SN/USERS/Follow", userId } as const),
    /* type setUsersType={
        type: "setUsers",
        users:userType
    } */
    unfollowSuccess: (userId: number) => ({ type: "SN/USERS/unFollow", userId } as const),
    /* type setCurrentPageType={
        type: "setCurrentPage",
        currentPage:number
    } */
    setUsers: (users: Array <userType>) => ({ type: "SN/USERS/setUsers", users } as const),
    /* type setTotalUsersCountType={
        type: "setTotalUsersCount",
        count:number
    } */
    setCurrentPage: (currentPage: number) => ({ type: "SN/USERS/setCurrentPage", currentPage } as const),
    setTotalUsersCount: (totalUsersCount: number) => ({ type: "SN/USERS/setTotalUsersCount", count: totalUsersCount } as const),
    /* type toggleIsFetchingType={
        type: "toggleIsFetching",
        isFetching:boolean
    } */
    toggleIsFetching: (isFetching: boolean) => ({ type: "SN/USERS/toggleIsFetching", isFetching } as const),
    /* type toggleIsFollowingProgressType={
        type: "toggleIsFollowingProgress",
        isFetching:boolean,
        userId:number
    } */
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: "SN/USERS/toggleIsFollowingProgress",
        isFetching,
        userId
    }as const)
}


export const getUsers = (currentPage = 1, pageSize: number): thunkType => {
    return (dispatch, getState) => {
        getState()
        dispatch(actions.setCurrentPage(currentPage))
        dispatch(actions.toggleIsFetching(true));
        UsersAPI.getUsers(currentPage, pageSize).then((data: getItemsType) => {
            dispatch(actions.toggleIsFetching(false));
            dispatch(actions.setUsers(data.items));
            dispatch(actions.setTotalUsersCount(data.totalCount));
        })

    }
}
const _followUnfollow = async (dispatch: dispatchType, userId: number, apiFunction: any, actionCreator: (userId: number) => ActionTypes) => {

    dispatch(actions.toggleIsFollowingProgress(true, userId));

    let response = await apiFunction(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleIsFollowingProgress(false, userId));

}



export const Follow = (userId: number): ThunkAction<Promise<void>, appStateType, unknown, ActionTypes> => {
    return async (dispatch) => {
        /* let apiFunction = UsersAPI.followFriends.bind(UsersAPI);
        let actionCreator = followSuccess; */
        _followUnfollow(dispatch, userId, UsersAPI.followFriends.bind(UsersAPI), actions.followSuccess)


    }
}
export const unFollow = (userId: number): thunkType => {
    return async (dispatch: any) => {
        /* let apiFunction = UsersAPI.unfollowFriends.bind(UsersAPI);
        let actionCreator = unfollowSuccess; */
        _followUnfollow(dispatch, userId, UsersAPI.unfollowFriends.bind(UsersAPI), actions.unfollowSuccess)


    }
}



export default usersReducer;
export type initialStateType = typeof initialState

type dispatchType = Dispatch<ActionTypes>
type getStateType = () => appStateType
type thunkType = baseThunkType<ActionTypes>
type ActionTypes = InferActionsTypes<typeof actions>