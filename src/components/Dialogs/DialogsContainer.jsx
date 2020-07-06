import React from "react";
import {onButtonClickEventMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



// const DialogsContainer = (props) => {
//     return (<ContextStore.Consumer>{(store)=>{
//         let state = store.getState().dialogsPage;
//
//         let onButtonClick = () => {
//             store.dispatch(onButtonClickEventMessageActionCreator());
//         }
//         let onPostChange = (newPost) => {
//             let action = updateNewPostTextMessageActionCreator(newPost);
//             store.dispatch(action);}
//             return(
//             <Dialogs updateNewPostTextMessage={onPostChange} sendMessage={onButtonClick} dialogsPage={state}/>)}}
// </ContextStore.Consumer>
//
//     )}
const mapStateToProps = (state) => {
    return {
        dialogsPage:state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newPostTextInDialogs) => {
            dispatch(onButtonClickEventMessageActionCreator(newPostTextInDialogs));
        }
        // updateNewPostTextMessage: (body) => {
        //     dispatch(updateNewPostTextMessageActionCreator(body))
        // }
    }
}





//let AuthRedirectComponent=withAuthRedirect(Dialogs);
// const mapStateToPropsForRedirect = (state) => {
//     return {
//
//         isAuth: state.auth.isAuth
//     }
// }
// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);

    // (props)=>{
    // if(!this.props.isAuth) return <Redirect to={"/login"}/>
    //
    // return <Dialogs {...props}/>}


// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);



