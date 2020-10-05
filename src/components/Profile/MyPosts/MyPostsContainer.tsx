import {actions} from "../../../redux/profileReducer";
import MyPosts, { mapDispatchToPropsType, mapStateToPropsType } from "./MyPosts";
import {connect} from "react-redux";
import { appStateType } from "../../../redux/reduxStoreNew";

const mapStateToProps = (state:appStateType) => {
    return {
        posts: state.profilePage.posts,
    } as mapStateToPropsType
}
/* 
const mapDispatchToProps = (dispatch:any) => {
    return {
        onButtonClick: (newPostText:string) => {
            dispatch(actions.onButtonClickEventActionCreator(newPostText));
        }
    }
} */


// const MyPostsContainer = (props) => {
//
//     return (
//         <ContextStore.Consumer>{(store)=> {
//             let state = store.getState();
//             let onButtonClick = () => {
//                 // eslint-disable-next-line no-undef
//                 store.dispatch(onButtonClickEventActionCreator());
//             }
//             let onPostChange = (text) => {
//                 let action = updateNewPostTextActionCreator(text);
//                 store.dispatch(action);
//             }
//             return(<MyPosts updateNewPostText={(onPostChange)} onButtonClick={(onButtonClick)} posts={state.profilePage.posts}
//                      newPostText={state.profilePage.newPostText}/>)}}
//
//         </ContextStore.Consumer>
//     )}


const MyPostsContainer= connect<mapStateToPropsType,mapDispatchToPropsType,{},appStateType>(mapStateToProps, {onButtonClick:actions.onButtonClickEventActionCreator} )(MyPosts);
export default MyPostsContainer;