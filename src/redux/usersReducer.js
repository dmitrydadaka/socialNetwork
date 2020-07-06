import { UsersAPI } from "../API/api";
import { updateObjectInArray } from "../utils/objectHelpers" ;

// const Follow = "Follow";
// const unFollow = "unFollow";
// const setUsers = "setUsers";
// const setCurrentPage = "setCurrentPage";
// const setTotalUsersCount = "setTotalUsersCount";
// const toggleIsFetching = "toggleIsFetching";
// const toggleIsFollowingProgress = "toggleIsFollowingProgress";


const startState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    fake: 10
};

const usersReducer = (state = startState, action) => {
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
export const followSuccess = (userId) => ({ type: "Follow", userId });
export const unfollowSuccess = (userId) => ({ type: "unFollow", userId });
export const setUsers = (users) => ({ type: "setUsers", users });
export const setCurrentPage = (currentPage) => ({ type: "setCurrentPage", currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: "setTotalUsersCount", count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: "toggleIsFetching", isFetching });
export const toggleIsFollowingProgress = (isFetching, userId) => ({
    type: "toggleIsFollowingProgress",
    isFetching,
    userId
});

export const getUsers = (currentPage = 1, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(true));
        UsersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.data.items));
            dispatch(setTotalUsersCount(response.data.totalCount));
        })

    }
}
const followUnfollow = async (dispatch, userId, apiFunction, actionCreator) => {
    
        dispatch(toggleIsFollowingProgress(true, userId));

    let response = await apiFunction(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));

}



export const Follow = (userId) => {
    return async (dispatch) => {
        /* let apiFunction = UsersAPI.followFriends.bind(UsersAPI);
        let actionCreator = followSuccess; */
        followUnfollow(dispatch, userId, UsersAPI.followFriends.bind(UsersAPI), followSuccess)


    }
}
    export const unFollow = (userId) => {
        return async (dispatch) => { 
        /* let apiFunction = UsersAPI.unfollowFriends.bind(UsersAPI);
        let actionCreator = unfollowSuccess; */
        followUnfollow(dispatch, userId,  UsersAPI.unfollowFriends.bind(UsersAPI), unfollowSuccess)


    }
}

    export default usersReducer;