import React from "react";
import { postsType } from "../../../types/types";
import s from "./Post.module.css";
type propsType={
    message:string
    likescount:number
}
const Post:React.FC<propsType>= (props) => {

    return (

        <div className={s.item}>

            <img src={"https://cdn3.iconfinder.com/data/icons/many-peoples-vol-2/512/16-512.png"}/>
            {props.message}


            <div>
                <span>
                    <img src={"https://img.icons8.com/plasticine/2x/like--v1.png"}/>
                    {props.likescount}
                </span>
            </div>
        </div>

    )
}
export default Post;