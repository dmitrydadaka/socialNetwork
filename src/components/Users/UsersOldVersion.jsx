import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/user.png";


const Users = (props) => {
  let getUsers=()=>  { if(props.users.length===0) {
       axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
           debugger
           props.setUsers(response.data.items)})}}



       // props.setUsers(
       // [
       //  {
       //      id: 1,
       //      photoUrl: "https://sonyaclub.ru/wp-content/uploads/2015/12/%D0%A1%D0%BC%D0%B5%D1%88%D0%BD%D0%BE%D0%B9-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D0%BA-%D0%BA%D0%B0%D1%80%D0%B0%D0%BE%D0%BA%D0%B5-300x300.jpg",
       //      followed: false,
       //      fullName: "Dmitry",
       //      status: "i am a boss",
       //      location: {city: "Minsk", country: "Belarus"}
       //  },
       //  {
       //      id: 2,
       //      photoUrl: "https://sonyaclub.ru/wp-content/uploads/2015/12/%D0%A1%D0%BC%D0%B5%D1%88%D0%BD%D0%BE%D0%B9-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D0%BA-%D0%BA%D0%B0%D1%80%D0%B0%D0%BE%D0%BA%D0%B5-300x300.jpg",
       //      followed: true,
       //      fullName: "Sasha",
       //      status: "i am a boss",
       //      location: {city: "Kyev", country: "Ukraine"}
       //  },
       //  {
       //      id: 3,
       //      photoUrl: "https://sonyaclub.ru/wp-content/uploads/2015/12/%D0%A1%D0%BC%D0%B5%D1%88%D0%BD%D0%BE%D0%B9-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D0%BA-%D0%BA%D0%B0%D1%80%D0%B0%D0%BE%D0%BA%D0%B5-300x300.jpg",
       //      followed: false,
       //      fullName: "Kseniya",
       //      status: "i am a boss",
       //      location: {city: "Moskow", country: "Russia"}
       //  }])}
    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.photo} src={u.photos.small !=null ?  u.photos.small:userPhoto }/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unFollow(u.id)
                            }}>follow</button>
                            : <button onClick={() => {
                                props.Follow(u.id)
                            }}>unFollow</button>}
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
        </div>
    )

}
export default Users;