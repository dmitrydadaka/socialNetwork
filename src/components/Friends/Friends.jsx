import React from "react";
import s from "./Friends.module.css"


const Friends = (props) => {

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