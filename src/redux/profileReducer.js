import { profileAPI, UsersAPI } from "../API/api";

const updateNewPostText = "updateNewPostText";
const onButtonClickEvent = "onButtonClickEvent";
const setUserProfile = "setUserProfile";
const setStatus = "setStatus";
const deletePost = "deletePost";
let startState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likescount: 23 },
        { id: 2, message: "Hi, it\'s my first day in social network", likescount: 102 },
        { id: 3, message: "slava tebe Boje!", likescount: 114 },
        { id: 4, message: "superrrrrrrrrrrrr", likescount: 596 },
        { id: 5, message: "uraaaaaaaaaaaaa", likescount: 1020 }

    ],

    profile: null,
    status: ""
};
const profileReducer = (state = startState, action) => {
    switch (action.type) {
        case onButtonClickEvent:
            // let newPost = {
            //     id: 6,
            //     message: state.newPostText,
            //     likescount: 0
            // }
            // state.posts.push(newPost);
            // state.newPostText = " ";
            let newPost = action.newPostText;
            // let stateCopy
            return {
                ...state,

                posts: [...state.posts, { id: 7, message: newPost, likescount: 3 }]
            };
        // stateCopy.posts=[...state.posts];
        // stateCopy.newPostText = " ";
        // stateCopy.posts.push({id: 7, message: newPost ,likescount:3});
        // case updateNewPostText: {
        //     // let stateCopy =
        //     return {...state, newPostText: action.newPost};
        //     // stateCopy.newPostText = action.newPost;
        // return stateCopy;}

        case setUserProfile:
            return { ...state, profile: action.profile }
        default:
            return state;
        case setStatus:
            return { ...state, status: action.status };
        case deletePost:
            return { ...state, posts: state.posts.filter(p => p.id != action.postId) }

    }
};
export const deletePostActionCreator = (postId) => ({ type: deletePost, postId });

export const onButtonClickEventActionCreator = (newPostText) => ({ type: onButtonClickEvent, newPostText });
export const updateNewPostTextActionCreator = (text) => ({ type: updateNewPostText, newPost: text });
export const setUserProfileAC = (profile) => ({ type: setUserProfile, profile });
export const setStatusAC = (status) => ({ type: setStatus, status });


export const getUserProfile = (userId) => async (dispatch) => {

    let response = await UsersAPI.getProfile(userId)
    /*  .then(response => { */
    dispatch(setUserProfileAC(response.data));

};

export const getStatus = (userId) => async (dispatch) => {

    let response = await profileAPI.getStatus(userId)


    dispatch(setStatusAC(response.data));


};

export const updateStatus = (status) => async (dispatch) => {

    let response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) { dispatch(setStatusAC(status)) }


};

export default profileReducer;