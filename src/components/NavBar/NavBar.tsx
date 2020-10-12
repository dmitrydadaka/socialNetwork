import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";
import {appStateType} from "../../redux/reduxStoreNew"
import { avatarsType } from "../../redux/friendsReducer";


console.log(s)

// let s={
//     "nav": "Navbar_nav__2h6Uu",
//     "item":"Navbar_item__3rIFF"
//     "activ": "jfkhkdhkjfh"
// }

// let c1 = "item";
// let c2 = "active";
// "item active"
// let classes = c1 + " " + c2;
// let classesNew=`${c1} ${c2}`;
//     `${s.item} ${s.active}`
type propsType={
    avatar:string
    name:string
    k:number
    friendsPage:{avatars:avatarsType[]}
}

const NavBar:React.FC<propsType> = ({friendsPage}) =>{

    let state=friendsPage;

    let avatarsNew= state.avatars.map(a=> <Friends k={a.id} name={a.name} avatar={a.avatar}/>)
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to={"profile"} activeClassName={s.activeLink}> Profile </NavLink></div>
            <div className={s.item}><NavLink to={"dialogs"} activeClassName={s.activeLink}> Messages </NavLink></div>
            <div className={s.item}><NavLink to={"news"} activeClassName={s.activeLink}> News </NavLink></div>
            <div className={s.item}><NavLink to={"Music"} activeClassName={s.activeLink}> Music </NavLink></div>
            <div className={s.item}><NavLink to={"settings"} activeClassName={s.activeLink}> Settings </NavLink></div>
            <div className={s.item}><NavLink to={"users"} activeClassName={s.activeLink}> Users </NavLink></div>
            <div className={s.item}><NavLink to={"sideBar"} activeClassName={s.activeLink}> SideBar </NavLink></div>

            <div className={s.item}><NavLink to={"friends"} activeClassName={s.activeLink}> <h3>Friends</h3> </NavLink>
                <div>
                    {avatarsNew}

                </div>

            </div>


        </nav>
    )
}
export default NavBar;
