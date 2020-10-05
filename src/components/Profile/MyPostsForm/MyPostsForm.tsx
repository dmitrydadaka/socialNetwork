import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { maxLengthCreator,  required} from "../../../validators/validators";
import { createField, GetStringKeys, Textarea } from "../../common/formControls/formControls";

const maxLength10=maxLengthCreator(10);
type propsType={

}
const MyPostsForm:React.FC<InjectedFormProps<MyPostsValuesType,propsType>&propsType>  = (props) => {

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

        <form onSubmit={props.handleSubmit} >
            <div>
            {createField<MyPostsValuesTypeKeys>(Textarea, [required,maxLength10], "newPostText",  "enter message", { })}
               
               
            </div>

            <div>
                <button >Press</button>
            </div>
        </form>
    )
}
 export const MyPostsReduxForm=reduxForm<MyPostsValuesType,propsType>({
    // a unique name for the form
    form: 'MyPostsForm'
})(MyPostsForm);

export type MyPostsValuesType={
    newPostText:string
}

type MyPostsValuesTypeKeys = GetStringKeys<MyPostsValuesType>




