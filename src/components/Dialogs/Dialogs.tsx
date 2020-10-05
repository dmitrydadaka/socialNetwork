import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import DialogReduxForm from "./DialogForm/DialogForm";
import { initialStateType } from "../../redux/dialogsReducer";
import { GetStringKeys } from "../common/formControls/formControls";

type Propstype={
dialogsPage:initialStateType
sendMessage:(messageText:string)=>void
}
export type newPostInDialogsValuesType={
    newPostTextInDialogs:string
    
}
const Dialogs:React.FC<Propstype> = (props) => {

    let state = props.dialogsPage;


    let dialogsElements = state.dialogs.map((d:any) => <DialogItem name={d.name} avatar={d.avatar} id={d.id}/>);
    let messagesElements = state.messages.map((m:any )=> <Message message={m.message}/>);
    //let newPostTextMessage = state.newPostTextMessage;


    let addNewMessage = (values:any) => {
        props.sendMessage(values.newPostTextInDialogs);
        values.newPostTextInDialogs="";
    }
    //let onPostChange = (elementObjectTarget) => {
     //   let newPost = elementObjectTarget.target.value;
     //    props.updateNewPostTextMessage(newPost);
    // }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <DialogReduxForm onSubmit={addNewMessage}/>
                </div>


            </div>
        </div>
    )
}



export default Dialogs;
