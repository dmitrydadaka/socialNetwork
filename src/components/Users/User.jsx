import React from "react";
import userPhoto from "../../assets/images/user.png";
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";


let User = (props) => {
   const u=props.user

    return (
         <div>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                        <img className={s.photo} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unFollow(u.id)
                                
                                


                            }}>unFollow</button> :
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.Follow(u.id)}}
                              

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