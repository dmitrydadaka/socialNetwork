import { UsersAPI } from "../API/api";
import { updateObjectInArray } from "../utils/objectHelpers" ;
import { photosType, userType } from "../components/types/types";

// const Follow = "Follow";
// const unFollow = "unFollow";
// const setUsers = "setUsers";
// const setCurrentPage = "setCurrentPage";
// const setTotalUsersCount = "setTotalUsersCount";
// const toggleIsFetching = "toggleIsFetching";
// const toggleIsFollowingProgress = "toggleIsFollowingProgress";

type followingInProgressType={
    userId:number
}
const initialState = {
    users: [] as Array <userType>,
    pageSize: 10 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: true as boolean,
    followingInProgress: [] as Array <number>//id users
    //fake: 10
};
export type initialStateType=typeof initialState
const usersReducer = (state = initialState, action:any):initialStateType => {
    switch (action.type) {
/*         case "fake": return{...state, fake:state.fake+1}
 */        case "Follow":
            return {
                ...state,
                // users:[...state.users] odno i toge
                users:updateObjectInArray(state.users, action.userId,"id" , {followed:true})
                /*  state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                }) */
            };
        case "unFollow":
            return {
                ...state,
                // users:[...state.users] odno i toge
                users:updateObjectInArray(state.users, action.userId,"id", {followed:false})
                /*  state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                }) */
            };
        case "setUsers": {
            return { ...state, users: [...action.users] }//skleivaem 2 spread operator
        }
            ;
        case "setCurrentPage": {
            return { ...state, currentPage: action.currentPage }

        }
            ;
        case "setTotalUsersCount": {
            return { ...state, totalUsersCount: action.count }

        }
            ;
        case "toggleIsFetching": {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case "toggleIsFollowingProgress": {
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
type followSuccessType={
    type: "Follow",
    userId:number
}
export const followSuccess = (userId:number) : followSuccessType=> ({ type: "Follow", userId });
type unfollowSuccessType={
    type: "unFollow",
    userId:number
}
export const unfollowSuccess = (userId:number):unfollowSuccessType => ({ type: "unFollow", userId });
type setUsersType={
    type: "setUsers",
    users:userType
}
export const setUsers = (users:userType):setUsersType => ({ type: "setUsers", users });
type setCurrentPageType={
    type: "setCurrentPage",
    currentPage:number
}
export const setCurrentPage = (currentPage:number):setCurrentPageType => ({ type: "setCurrentPage", currentPage });
type setTotalUsersCountType={
    type: "setTotalUsersCount",
    count:number
}
export const setTotalUsersCount = (totalUsersCount:number):setTotalUsersCountType => ({ type: "setTotalUsersCount", count: totalUsersCount });
type toggleIsFetchingType={
    type: "toggleIsFetching",
    isFetching:boolean
}
export const toggleIsFetching = (isFetching:boolean):toggleIsFetchingType => ({ type: "toggleIsFetching", isFetching });
type toggleIsFollowingProgressType={
    type: "toggleIsFollowingProgress",
    isFetching:boolean,
    userId:number
}
export const toggleIsFollowingProgress = (isFetching:boolean, userId:number):toggleIsFollowingProgressType => ({
    type: "toggleIsFollowingProgress",
    isFetching,
    userId
});

export const getUsers = (currentPage = 1, pageSize:number) => {
    return (dispatch:any) => {
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(true));
        UsersAPI.getUsers(currentPage, pageSize).then((response:any) => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.data.items));
            dispatch(setTotalUsersCount(response.data.totalCount));
        })

    }
}
const followUnfollow = async (dispatch:any, userId:number, apiFunction:any, actionCreator:any) => {
    
        dispatch(toggleIsFollowingProgress(true, userId));

    let response = await apiFunction(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));

}



export const Follow = (userId:number) => {
    return async (dispatch:any) => {
        /* let apiFunction = UsersAPI.followFriends.bind(UsersAPI);
        let actionCreator = followSuccess; */
        followUnfollow(dispatch, userId, UsersAPI.followFriends.bind(UsersAPI), followSuccess)


    }
}
    export const unFollow = (userId:number) => {
        return async (dispatch:any) => { 
        /* let apiFunction = UsersAPI.unfollowFriends.bind(UsersAPI);
        let actionCreator = unfollowSuccess; */
        followUnfollow(dispatch, userId,  UsersAPI.unfollowFriends.bind(UsersAPI), unfollowSuccess)


    }
}

    export default usersReducer;