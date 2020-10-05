import React from "react"
import {Field, InjectedFormProps, reduxForm, SubmitHandler} from "redux-form"
import { createField, GetStringKeys, Textarea } from "../../common/formControls/formControls"
import { required, maxLengthCreator } from "../../../validators/validators"
import { newPostInDialogsValuesType } from "../Dialogs";

const maxLength50=maxLengthCreator(50);

type propsType={
}
type newPostInDialogsValuesTypeKeys = GetStringKeys<newPostInDialogsValuesType>

const DialogForm:React.FC<InjectedFormProps<newPostInDialogsValuesType, propsType>&propsType>= (props) => {
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
            {createField<newPostInDialogsValuesTypeKeys>(Textarea, [required,maxLength50], "newPostTextInDialogs", "Enter your message")}

                <Field   name={"newPostTextInDialogs"} validate={[required,maxLength50]} placeholder={"Enter your message"}
                       component={Textarea} />
            </div>
            <div>
                <button >Press</button>
            </div>
        </form>
    )
}
const DialogReduxForm=reduxForm<newPostInDialogsValuesType,propsType>({
    // a unique name for the form
    form: 'DialogForm'
})(DialogForm);




export default DialogReduxForm;
