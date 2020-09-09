import React from "react";
import {Field, reduxForm} from "redux-form";


import { Textarea } from "../../common/formControls/formControls";
import { required, maxLengthCreator } from "../../../validators/validators";

const maxLength50=maxLengthCreator(50);
const DialogForm = (props) => {
    // let state = props.dialogsPage;
    // // let newPostTextMessage = state.newPostTextMessage;
    // let onButtonClick = () => {
    //     props.sendMessage();
    // }
    // let onPostChange = (elementObjectTarget) => {
    //     let newPost = elementObjectTarget.target.value;
    //     props.updateNewPostTextMessage(newPost);
    // }
    return (

        <form onSubmit={props.handleSubmit}>

            <div>
                <Field   name={"newPostTextInDialogs"} validate={[required,maxLength50]} placeholder={"Enter your message"}
                       component={Textarea} />
            </div>
            <div>
                <button >Press</button>
            </div>
        </form>
    )
}
const DialogReduxForm=reduxForm({
    // a unique name for the form
    form: 'DialogForm'
})(DialogForm);




export default DialogReduxForm;
