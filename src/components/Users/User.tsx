import React from "react";
import userPhoto from "../../assets/images/user.png";
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import { userType } from "../types/types";
type propsType={
user:userType,
unFollow:(userId:number)=>void,
followingInProgress:Array<number>
Follow:(userId:number)=>void,

}

let User:React.FC<propsType> = ({user,unFollow, followingInProgress, Follow}) => {
   

    return (
         <div>
                <span>
                    <div>
                        <NavLink to={"profile/" + user.id}>
                        <img className={s.photo} src={user.photos.small != null ? user.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed ?
                            <button disabled={followingInProgress.some((id:number) => id === user.id)} onClick={() => {
                                unFollow(user.id)
                                
                                


                            }}>unFollow</button> :
                            <button disabled={followingInProgress.some((id:number) => id === user.id)} onClick={() => {
                            Follow(user.id)}}
                              

                            >Follow</button>}
                    </div>
                    </span>
                <span>
                    <span>
                        <div>{user.name}  </div>
                        <div> {user.status}  </div>
                    </span>
                    <span>
                        <div>  {"u.location.country"}</div>
                        <div>  {"u.location.city"}</div>
                    </span>
                </span>
            </div>)}
    


export default User;