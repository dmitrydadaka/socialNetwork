import {onButtonClickEventActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClick: (newPostText) => {
            dispatch(onButtonClickEventActionCreator(newPostText));
        },
        // updateNewPostText: (text) => {
        //     dispatch(updateNewPostTextActionCreator(text))
        // }
    }
}


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


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps )(MyPosts);
export default MyPostsContainer;