import { profileAPI } from "../API/profileApi";
import { FormAction, stopSubmit } from "redux-form";
import Swal from 'sweetalert2';
import { postsType, profileType, photosType } from "../components/types/types";
import { ThunkAction } from "redux-thunk";
import { appStateType, baseThunkType, InferActionsTypes } from "./reduxStoreNew";
import { UsersAPI } from "../API/userApi";
import { resultCodesEnum } from "../API/api";

const updateNewPostText = "SN/PROFILE/updateNewPostText";
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
    error: null as any | null,
};
type errorType = {
    error: any
}


/* export type initialStateType={
    profile:any,
    status:string|null,
    error:any,
    posts:Array<postsType>

} */
const profileReducer = (state = initialState, action: actionTypes): initialStateType => {
    switch (action.type) {
        case "SN/PROFILE/onButtonClickEvent":
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

        case "SN/PROFILE/setUserProfile":
            return { ...state, profile: action.profile };
        case "SN/PROFILE/setStatus":
            return { ...state, status: action.status };
        case "SN/PROFILE/deletePost":
            return { ...state, posts: state.posts.filter(p => p.id != action.postId) }
        case  "SN/PROFILE/setPhoto":
            return { ...state, profile: { ...state.profile, photos: action.photos } as profileType };
        case "SN/PROFILE/errorMessage":
            return { ...state.error, error: action.error }
        default:

            return state;


    }
};
/* type actionTypes=deletePostActionCreatorType|onButtonClickEventActionCreatorType|updateNewPostTextActionCreatorType|setUserProfileACType|
setStatusACType|savePhotoSuccessType|errorMessageACType */

export const actions =
{
    deletePostActionCreator: (postId: number) => ({ type: "SN/PROFILE/deletePost", postId } as const),

    onButtonClickEventActionCreator: (newPostText: string) =>
        ({ type:"SN/PROFILE/onButtonClickEvent", newPostText } as const),

    updateNewPostTextActionCreator: (text: string) =>
        ({ type: updateNewPostText, newPost: text } as const),


    setUserProfileAC: (profile: profileType) => ({ type: "SN/PROFILE/setUserProfile", profile } as const),

    setStatusAC: (status: string) => ({ type: "SN/PROFILE/setStatus", status } as const),

    savePhotoSuccess: (photos: photosType) => ({ type:  "SN/PROFILE/setPhoto", photos } as const),

    errorMessageAC: (error: any) => ({ type: "SN/PROFILE/errorMessage", error } as const)
}



export const getUserProfile = (userId: number): thunkType => async (dispatch) => {

    let data = await profileAPI.getProfile(userId)
    /*  .then(response => { */
    dispatch(actions.setUserProfileAC(data));

};

export const getStatus = (userId: number): thunkType => async (dispatch) => {

    let data = await profileAPI.getStatus(userId)


    dispatch(actions.setStatusAC(data));


};
export const errorUpdateStatusMessage = (status: string, error: any): thunkType => async (dispatch) => {

    const data = await profileAPI.updateStatus(status)

    if (data.resultCode != resultCodesEnum.Success) { dispatch(actions.errorMessageAC(error)) }

}

export const updateStatus = (status: string): thunkType => async (dispatch) => {
    debugger

    try {
        const data = await profileAPI.updateStatus(status)

        if (data.resultCode === resultCodesEnum.Success) { dispatch(actions.setStatusAC(status)) }
    }
    catch (error) {

        errorUpdateStatusMessage(status, error);
        // alert(error)
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: error
        })

    }




};
export const savePhoto = (file: File): thunkType => async (dispatch) => {

    let response = await profileAPI.savePhoto(file)

    if (response.data.resultCode === 0) { dispatch(actions.savePhotoSuccess(response.data.data.photos)) }


};
export const saveProfile = (profile: profileType): thunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile)

    if (data.resultCode === resultCodesEnum.Success) {
        if (userId != null) { dispatch(getUserProfile(userId)) }
        else {
            throw new Error("userId can't be null")
        }
    }
    else {

        dispatch(stopSubmit("edit-profile", { _error: data.messages[0] }))
        return Promise.reject(data.messages[0])

    }

    /* let wrongNetwork = response.data.messages[0]
    .slice(
      response.data.messages[0].indexOf(">") + 1,
      response.data.messages[0].indexOf(")")
    )
    .toLocaleLowerCase(); */        //popisyvaet-vyvodit soobshchenie pod nygnym inputom


    // let confirmButtonText = response.data.messages[0].match(/Contacts->(\w+)/)[1]
    /*    let keySwal = response.data.messages[0].match(/Contacts->(\w+)/)[1].toLowerCase();

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

   } */
   


}

type thunkType = baseThunkType<actionTypes|FormAction>
export type actionTypes = InferActionsTypes<typeof actions>
export type initialStateType = typeof initialState

export default profileReducer;