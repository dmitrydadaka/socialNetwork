import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import DialogReduxForm from "./DialogForm/DialogForm";


const Dialogs = (props) => {

    let state = props.dialogsPage;


    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} avatar={d.avatar} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    //let newPostTextMessage = state.newPostTextMessage;


    let addNewMessage = (values) => {
        props.sendMessage(values.newPostTextInDialogs);
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
