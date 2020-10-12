import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import { maxLengthCreator,  required} from "../../validators/validators";
import { createField, GetStringKeys, Input } from "../common/formControls/formControls";

const maxLength10=maxLengthCreator(10);
type propsType={

}
const SideBarForm:React.FC<InjectedFormProps<SideBarFormValuesType,propsType>&propsType>  = (props) => {

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
            {createField<SideBarFormValuesTypeKeys>(Input, [required,maxLength10], "term",  "searching", { })}
               
               
            </div>

            <div>
                <button >Press</button>
            </div>
        </form>
    )
}
 export const SideBarReduxForm=reduxForm<SideBarFormValuesType,propsType>({
    // a unique name for the form
    form: 'SideBarForm'
})(SideBarForm);

export type SideBarFormValuesType={
    term:string
}

type SideBarFormValuesTypeKeys = GetStringKeys<SideBarFormValuesType>




