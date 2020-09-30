import React from "react";
import s from "./../Dialogs.module.css";

type propsType={
    message:string
}

const Message:React.FC<propsType> = ({message}) => {


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
                {message}
            </div>

        </div>

    )
}

export default Message;
