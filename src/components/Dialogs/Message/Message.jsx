import React from "react";
import s from "./../Dialogs.module.css";



const Message = (props) => {


    // let onButtonClick = () => {
    //
    //
    //     let text = newPost.current.value;
    //     props.onButtonClickEvent(text);
    //
    // }
    //
    // let onPostChange = () => {
    //     let text = newPost.current.value;
    //     props.updateNewPostText(text);
    // }
    return (
        <div className={s.dialog}>
            <div className={s.message}>
                {props.message}
            </div>

        </div>

    )
}

export default Message;
