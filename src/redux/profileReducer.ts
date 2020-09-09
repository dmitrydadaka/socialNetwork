import { profileAPI, UsersAPI } from "../API/api";
import { stopSubmit } from "redux-form";
import Swal from 'sweetalert2';
import { postsType, profileType, photosType } from "../components/types/types";
const updateNewPostText = "updateNewPostText";
const onButtonClickEvent = "onButtonClickEvent";
const setUserProfile = "setUserProfile";
const setStatus = "setStatus";
const setPhoto = "setPhoto"
const deletePost = "deletePost";
const errorMessage = "errorMessage";
let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likescount: 23 },
        { id: 2, message: "Hi, it\'s my first day in social network", likescount: 102 },
        { id: 3, message: "slava tebe Boje!", likescount: 114 },
        { id: 4, message: "superrrrrrrrrrrrr", likescount: 596 },
        { id: 5, message: "uraaaaaaaaaaaaa", likescount: 1020 }

    ] as Array<postsType>,

    profile: null as profileType | null,
    status: "",
    error: null as any|null,
    newPostText:""
};
type errorType={
    error:any
}


/* export type initialStateType={
    profile:any,
    status:string|null,
    error:any,
    posts:Array<postsType>

} */
export type initialStateType=typeof initialState
const profileReducer = (state = initialState, action: any):initialStateType => {
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
            return { ...state, profile: action.profile };
        case setStatus:
            return { ...state, status: action.status };
        case deletePost:
            return { ...state, posts: state.posts.filter(p => p.id != action.postId) }
        case setPhoto:
            return { ...state,profile:{...state.profile, photos: action.photos }as profileType } ;
        case errorMessage:
            return { ...state.error, error: action.error }
        default:

            return state;


    }
};
type deletePostActionCreatorType={
    type:typeof deletePost,
    postId: number
}
export const deletePostActionCreator = (postId:number): deletePostActionCreatorType => ({ type: deletePost, postId });
type onButtonClickEventActionCreatorType={
type: typeof onButtonClickEvent,
newPostText:string,

}
export const onButtonClickEventActionCreator = (newPostText:string):onButtonClickEventActionCreatorType =>
 ({ type: onButtonClickEvent, newPostText });
 type updateNewPostTextActionCreatorType={
     type:typeof updateNewPostText,
     newPost:string
 }
export const updateNewPostTextActionCreator = (text:string):updateNewPostTextActionCreatorType => 
({ type: updateNewPostText, newPost: text });

type setUserProfileACType={
    type:typeof setUserProfile,
    profile:profileType
}
export const setUserProfileAC = (profile:profileType):setUserProfileACType => ({ type: setUserProfile, profile });
type setStatusACType={
type:typeof setStatus,
status:string
}
export const setStatusAC = (status:string):setStatusACType => ({ type: setStatus, status });
type savePhotoSuccessType={
    type:typeof setPhoto,
    photos:photosType

}
export const savePhotoSuccess = (photos:photosType):savePhotoSuccessType => ({ type: setPhoto, photos });
type errorMessageACType={
    type: typeof errorMessage,
    error:any
}
export const errorMessageAC = (error:any): errorMessageACType => ({ type: errorMessage, error })



export const getUserProfile = (userId:number) => async (dispatch:any) => {

    let response = await UsersAPI.getProfile(userId)
    /*  .then(response => { */
    dispatch(setUserProfileAC(response.data));

};

export const getStatus = (userId:number) => async (dispatch:any) => {

    let response = await profileAPI.getStatus(userId)


    dispatch(setStatusAC(response.data));


};
export const errorUpdateStatusMessage = (status:string, error:any) => async (dispatch:any) => {

    const response = await profileAPI.updateStatus(status)

    if (response.data.resultCode != 0) { dispatch(errorMessageAC(error)) }

}

export const updateStatus = (status:string) => async (dispatch:any) => {
    debugger

    try {
        const response = await profileAPI.updateStatus(status)

        if (response.data.resultCode === 0) { dispatch(setStatusAC(status)) }
    }
    catch (error) {

        errorUpdateStatusMessage(status,error);
        // alert(error)
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: error
        })

    }




};
export const savePhoto = (file:any) => async (dispatch:any) => {

    let response = await profileAPI.savePhoto(file)

    if (response.data.resultCode === 0) { dispatch(savePhotoSuccess(response.data.data.photos)) }


};
export const saveProfile = (profile:profileType) => async (dispatch:any, getState:any) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)

    if (response.data.resultCode === 0) { dispatch(getUserProfile(userId)) }
    else { /* let wrongNetwork = response.data.messages[0]
        .slice(
          response.data.messages[0].indexOf(">") + 1,
          response.data.messages[0].indexOf(")")
        )
        .toLocaleLowerCase(); */        //popisyvaet-vyvodit soobshchenie pod nygnym inputom


        // let confirmButtonText = response.data.messages[0].match(/Contacts->(\w+)/)[1]
        let keySwal = response.data.messages[0].match(/Contacts->(\w+)/)[1].toLowerCase();

        Swal.fire({
            title: 'Error!',
            text: 'You wrote not right site',
            icon: 'error',
            confirmButtonText: keySwal
        })
        let key = response.data.messages[0].match(/Contacts->(\w+)/)[1].toLowerCase();
        dispatch(
            stopSubmit("editProfile", {
                contacts: { [key]: response.data.messages[0] }
            })
        )
        return Promise.reject(response.data.messages[0]
        )

    }


}
export default profileReducer;