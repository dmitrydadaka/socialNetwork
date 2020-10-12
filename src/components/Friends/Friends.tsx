import React from "react";
import { avatarsType } from "../../redux/friendsReducer";
import { mapStateToPropsType } from "../Profile/MyPosts/MyPosts";
import SideBar from "../sideBar/sideBar";
import s from "./Friends.module.css"
type propsType={
    avatar?:string
    name?:string
    k?:number
    
    
}



const Friends:React.FC<propsType> = (props) => {

    return (
        <div>
            <div>
                <img className={s.avatar} src={props.avatar}  />
            </div>
            <div className={s.name}>
                {props.name}
            </div>
            


        </div>

    )
}
export default Friends;