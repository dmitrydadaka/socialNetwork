import React from "react";
import userPhoto from "../../assets/images/user.png";
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import { userType } from "../types/types";
type propsType={
user:userType,
unFollow:(id:any)=>void,
followingInProgress:Array<number>
Follow:(id:any)=>void,

}

let User:React.FC<propsType> = ({user,unFollow, followingInProgress, Follow}) => {
   const u=user

    return (
         <div>
                <span>
                    <div>
                        <NavLink to={"profile/" + u.id}>
                        <img className={s.photo} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button disabled={followingInProgress.some((id:any) => id === u.id)} onClick={() => {
                                unFollow(u.id)
                                
                                


                            }}>unFollow</button> :
                            <button disabled={followingInProgress.some((id:any) => id === u.id)} onClick={() => {
                            Follow(u.id)}}
                              

                            >Follow</button>}
                    </div>
                    </span>
                <span>
                    <span>
                        <div>{u.name}  </div>
                        <div> {u.status}  </div>
                    </span>
                    <span>
                        <div>  {"u.location.country"}</div>
                        <div>  {"u.location.city"}</div>
                    </span>
                </span>
            </div>)}
    


export default User;