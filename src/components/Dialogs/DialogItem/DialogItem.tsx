import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props:any) => {
    let path = "/dialog/" + props.id;
    return (
        <div className={s.dialog + " " + s.active}>

            <NavLink to={path}>
                <div>
                    <img className={s.avatar} src={props.avatar}/>
                </div>
                <div>
                    {props.name}
                </div>
            </NavLink>

        </div>
    )

}


export default DialogItem;
