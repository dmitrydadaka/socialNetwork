import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
type propsType={
    id:number,
    avatar:string,
    name:string
}

const DialogItem:React.FC<propsType> = ({id, avatar, name}) => {
    let path = "/dialog/" + id;
    return (
        <div className={s.dialog + " " + s.active}>

            <NavLink to={path}>
                <div>
                    <img className={s.avatar} src={avatar}/>
                </div>
                <div>
                    {name}
                </div>
            </NavLink>

        </div>
    )

}


export default DialogItem;
