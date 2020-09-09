import React from "react";
import s from "./Header.module.css";
import { Redirect} from "react-router-dom";

const Header = (props) => {
    return (
        

            <header className={s.header}>
                <img src="https://s1.logaster.com/static/v3/img/products/logo.png"/>
                <div className={s.loginBlock}>
                    {props.isAuth ? <div> {props.login}  <button onClick={props.logout  }>Logout</button></div>:
                                        <Redirect from={"/"} to={"/Login"}/>}
 
                    {/* <NavLink to={"/login"}>login</NavLink> } */}
                    
                </div>

            </header>

        
            )
}
        export default Header;