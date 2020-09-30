import React from "react";
import {Field, reduxForm} from "redux-form";
import { maxLengthCreator,  required} from "../../../validators/validators";
import { Textarea } from "../../common/formControls/formControls";

const maxLength10=maxLengthCreator(10);
const MyPostsForm = ({handleSubmit}:any) => {

    //let newPost = React.createRef();

    // let onButton = () => {
    //     props.onButtonClick();
        // eslint-disable-next-line no-undef
        // props.dispatch(onButtonClickEventActionCreator());    }
    //let onPostChange = (e) => {
    //     // let text = newPost.current.value;
    //     let text = e.target.value;
    //     props.updateNewPostText(text);
    //     // let action=updateNewPostTextActionCreator(text);
    //     // props.dispatch(action);
    // }
    // let newPostText = props.newPostText;
    
    return (

        <form onSubmit={handleSubmit} >
            <div>
                <Field   name={"newPostText"} component={Textarea} placeholder={"enter message"}
                         validate={[required, maxLength10]}  />
            </div>

            <div>
                <button >Press</button>
            </div>
        </form>
    )
}
 export const MyPostsReduxForm=reduxForm({
    // a unique name for the form
    form: 'MyPostsForm'
})(MyPostsForm);


//  const MyPostsInForm = (props) => {
//     return (
//         <div>
//             <MyPostsReduxForm onSubmit={props.onSubmit} />
//         </div>
//     )
// }
// const mapStateToProps = (state) => {
//     return {
//         posts: state.profilePage.posts,
//         newPostText: state.profilePage.newPostText
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onButtonClick: () => {
//             dispatch(onButtonClickEventActionCreator());
//         },
//         updateNewPostText: (text) => {
//             dispatch(updateNewPostTextActionCreator(text))
//         }
//     }
// }



