import React from "react";
import NavBar from "./NavBar";
import {connect} from "react-redux";

const mapStateToProps=(state)=>{

    return {
        friendsPage: state.friendsPage
    }
};

const NavBarContainer=connect(mapStateToProps)(NavBar);
export default  NavBarContainer;

