import React from "react";
import NavBar from "./NavBar";
import {connect} from "react-redux";
import { appStateType } from "../../redux/reduxStoreNew";

const mapStateToProps=(state:appStateType)=>{

    return {
        friendsPage: state.friendsPage
    }
};

const NavBarContainer=connect(mapStateToProps)(NavBar);
export default  NavBarContainer;

